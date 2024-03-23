import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Importa los componentes de Material Dashboard 2 React aquí

function Tables() {
    const [data, setData] = useState({ columns: [], rows: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3300/proveedores');
                // Asumiendo que la respuesta es un arreglo de objetos de proveedores
                const rows = response.data.map((item) => ({
                    author: <Author image={team2} name={item.name} email={item.email} />,
                    function: <Job title={item.title} description={item.description} />,
                    status: (
                        <MDBox ml={-1}>
                            <MDBadge badgeContent={item.status} color="success" variant="gradient" size="sm" />
                        </MDBox>
                    ),
                    employed: (
                        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            {item.employed}
                        </MDTypography>
                    ),
                    action: (
                        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            Edit
                        </MDTypography>
                    ),
                }));

                setData((prevState) => ({
                    ...prevState,
                    rows,
                }));
            } catch (error) {
                console.error("Hubo un error al cargar los datos de los proveedores", error);
            }
        };

        fetchData();
    }, []);

    // Las definiciones de Author y Job pueden permanecer iguales

    // Asegúrate de ajustar el retorno para usar los datos de `data`
    return (
        columns: [
            { Header: "author", accessor: "author", width: "45%", align: "left" },
            { Header: "function", accessor: "function", align: "left" },
            { Header: "status", accessor: "status", align: "center" },
            { Header: "employed", accessor: "employed", align: "center" },
            { Header: "action", accessor: "action", align: "center" },
        ],

    );
}

export default Tables;
