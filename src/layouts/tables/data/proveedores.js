import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import DataTable from "examples/Tables/DataTable"; 

export default function Tables() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3300/proveedores')
      .then(response => {
        const fetchedRows = response.data.map(item => ({
          author: <MDBox display="flex" alignItems="center" lineHeight={1}>
                    <MDBox ml={2} lineHeight={1}>
                      <MDTypography display="block" variant="button" fontWeight="medium">
                        {item.nombre}
                      </MDTypography>
                      <MDTypography variant="caption">{item.email}</MDTypography>
                    </MDBox>
                  </MDBox>,
          function: <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                      {item.direccion}, {item.ciudad}
                    </MDTypography>,
          status: <MDBadge badgeContent={item.plazoentrega} color="success" variant="gradient" size="sm" />,
          employed: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                      {item.ruc}
                    </MDTypography>,
          action: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    Edit
                  </MDTypography>,
        }));
        setRows(fetchedRows);
      })
      .catch(error => console.error("Error al cargar los datos de los proveedores", error));
  }, []);

  const columns = [
    { Header: "Proveedor", accessor: "author", align: "left" },
    { Header: "Dirección y Ciudad", accessor: "function", align: "left" },
    { Header: "Plazo de Entrega", accessor: "status", align: "center" },
    { Header: "RUC", accessor: "employed", align: "center" },
    { Header: "Acciones", accessor: "action", align: "center" },
  ];

  return (
    <MDBox pt={3}>
      <DataTable
        table={{ columns, rows }}
        isSorted={false}
        entriesPerPage={false}
        showTotalEntries={false}
        noEndBorder
      />
    </MDBox>
  );
}
