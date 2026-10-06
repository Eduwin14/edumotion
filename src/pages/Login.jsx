import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')

  const { iniciarSesion } = useAuth()
  const navigate = useNavigate()

  const manejarLogin = (e) => {
    e.preventDefault()
    setError('')

    const resultado = iniciarSesion(correo, contrasena)

    if (resultado.success) {
      navigate('/dashboard')
    } else {
      setError(resultado.message)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <div className="medical-logo">+</div>

          <h1>EduMed</h1>

          <p>
            Plataforma de reservas médicas
          </p>
        </div>

        <form onSubmit={manejarLogin}>

          <div className="form-group">
            <label htmlFor="correo">
              Correo electrónico
            </label>

            <input
              id="correo"
              type="email"
              placeholder="paciente@edumed.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contrasena">
              Contraseña
            </label>

            <input
              id="contrasena"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-submit"
          >
            Iniciar sesión
          </button>

        </form>

        <div className="login-demo">
          <strong>Usuario de prueba</strong>

          <span>
            Correo: paciente@edumed.com
          </span>

          <span>
            Contraseña: 123456
          </span>
        </div>

      </div>
    </div>
  )
}

export default Login