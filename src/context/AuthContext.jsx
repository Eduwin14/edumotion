import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  const iniciarSesion = (correo, contrasena) => {
    if (!correo || !contrasena) {
      return {
        success: false,
        message: 'Por favor completa todos los campos.'
      }
    }

    // Usuario de prueba para el proyecto académico
    if (
      correo === 'paciente@edumed.com' &&
      contrasena === '123456'
    ) {
      const datosUsuario = {
        id: 1,
        nombre: 'Carlos Rodríguez',
        correo: 'paciente@edumed.com',
        rol: 'Paciente'
      }

      setUsuario(datosUsuario)

      return {
        success: true,
        message: 'Inicio de sesión exitoso.'
      }
    }

    return {
      success: false,
      message: 'Correo o contraseña incorrectos.'
    }
  }

  const cerrarSesion = () => {
    setUsuario(null)
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        iniciarSesion,
        cerrarSesion,
        estaAutenticado: !!usuario
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}