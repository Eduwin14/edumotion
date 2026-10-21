
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const obtenerUsuarioGuardado = () => {
  try {
    const usuarioGuardado = localStorage.getItem('edumed_usuario')
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null
  } catch (error) {
    console.error('Error al recuperar la sesión:', error)
    return null
  }
}

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(obtenerUsuarioGuardado)

  const iniciarSesion = (correo, contrasena) => {
    if (!correo.trim() || !contrasena) {
      return {
        success: false,
        message: 'Por favor completa todos los campos.'
      }
    }

    if (
      correo.trim().toLowerCase() === 'paciente@edumed.com' &&
      contrasena === '123456'
    ) {
      const datosUsuario = {
        id: 1,
        nombre: 'Carlos Rodríguez',
        correo: 'paciente@edumed.com',
        rol: 'Paciente'
      }

      try {
        localStorage.setItem('edumed_usuario', JSON.stringify(datosUsuario))
        setUsuario(datosUsuario)

        return {
          success: true,
          message: 'Inicio de sesión exitoso.'
        }
      } catch (error) {
        console.error('Error al guardar la sesión:', error)

        return {
          success: false,
          message: 'No se pudo guardar la sesión en este navegador.'
        }
      }
    }

    return {
      success: false,
      message: 'Correo o contraseña incorrectos.'
    }
  }

  const cerrarSesion = () => {
    localStorage.removeItem('edumed_usuario')
    setUsuario(null)
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        iniciarSesion,
        cerrarSesion,
        estaAutenticado: Boolean(usuario)
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
