import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'; // Asegúrate de importar Navigate y Outlet
import './App.css';
import DashboardLayout from './components/Layout/DashboardLayout'; 
import DashboardPage from './pages/Dashboard/DashboardPage';
import UsersPage from './pages/Users/UsersPage'; // Importa UsersPage

function App() {
  return (
    <Routes>
      {/* Ruta para el dashboard con el layout */}
      <Route path="/dashboard/*" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="users/*" element={<UsersPage />} /> {/* Actualiza la ruta para UsersPage */}
        <Route path="*" element={<Outlet />} /> {/* Usa Outlet para rutas anidadas */}
      </Route>

      {/* Redirige a /dashboard por defecto */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
