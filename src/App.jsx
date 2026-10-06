import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { CitasProvider } from './context/CitasContext'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Citas from './pages/Citas'
import Agendar from './pages/Agendar'
import Perfil from './pages/Perfil'

import './App.css'

function RutaProtegida({ children }) {
  const { estaAutenticado } = useAuth()

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />
  }

  return children
}

function App() {
  return (
    <AuthProvider>
      <CitasProvider>

        <BrowserRouter>

          <Routes>

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/dashboard"
              element={
                <RutaProtegida>
                  <Dashboard />
                </RutaProtegida>
              }
            />

            <Route
              path="/citas"
              element={
                <RutaProtegida>
                  <Citas />
                </RutaProtegida>
              }
            />

            <Route
              path="/agendar"
              element={
                <RutaProtegida>
                  <Agendar />
                </RutaProtegida>
              }
            />

            <Route
              path="/perfil"
              element={
                <RutaProtegida>
                  <Perfil />
                </RutaProtegida>
              }
            />

            <Route
              path="*"
              element={
                <Navigate
                  to="/login"
                  replace
                />
              }
            />

          </Routes>

        </BrowserRouter>

      </CitasProvider>
    </AuthProvider>
  )
}

export default App