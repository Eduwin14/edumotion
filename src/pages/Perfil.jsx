
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Perfil.css'

function Perfil() {
  const navigate = useNavigate()
  const { usuario } = useAuth()

  const [nombre, setNombre] = useState(usuario?.nombre || '')
  const [correo, setCorreo] = useState(usuario?.correo || '')
  const [telefono, setTelefono] = useState(
    () => localStorage.getItem('edumed_telefono') || ''
  )
  const [documento, setDocumento] = useState(
    () => localStorage.getItem('edumed_documento') || ''
  )
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    setNombre(usuario?.nombre || '')
    setCorreo(usuario?.correo || '')
  }, [usuario])

  const guardarCambios = (e) => {
    e.preventDefault()
    setMensaje('')
    setError(false)

    if (!nombre.trim() || !correo.trim() || !telefono.trim() || !documento.trim()) {
      setMensaje('Completa todos los campos.')
      setError(true)
      return
    }

    try {
      localStorage.setItem('edumed_telefono', telefono.trim())
      localStorage.setItem('edumed_documento', documento.trim())

      setMensaje('Los datos del perfil se guardaron en este navegador.')
    } catch (err) {
      console.error('Error al guardar el perfil:', err)
      setMensaje('No fue posible guardar los datos.')
      setError(true)
    }
  }

  return (
    <div className="perfil-page">
      <header className="perfil-header">
        <button
          className="perfil-back"
          onClick={() => navigate('/dashboard')}
        >
          ← Volver al inicio
        </button>

        <span>CUENTA DEL PACIENTE</span>
        <h1>Mi perfil</h1>
        <p>Consulta y actualiza tu información personal.</p>
      </header>

      <main className="perfil-container">
        <section className="perfil-card">
          <div className="perfil-top">
            <div className="perfil-avatar">
              {nombre.trim().charAt(0) || 'C'}
            </div>

            <div>
              <h2>{nombre}</h2>
              <p>Paciente de EduMed</p>
            </div>
          </div>

          <form onSubmit={guardarCambios}>
            <div className="perfil-grid">
              <div className="perfil-field">
                <label htmlFor="perfil-nombre">Nombre completo</label>
                <input
                  id="perfil-nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className="perfil-field">
                <label htmlFor="perfil-correo">Correo electrónico</label>
                <input
                  id="perfil-correo"
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>

              <div className="perfil-field">
                <label htmlFor="perfil-documento">Número de documento</label>
                <input
                  id="perfil-documento"
                  type="text"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                  required
                />
              </div>

              <div className="perfil-field">
                <label htmlFor="perfil-telefono">Teléfono</label>
                <input
                  id="perfil-telefono"
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="perfil-info">
              <strong>ℹ️ Almacenamiento del perfil</strong>
              <p>
                El teléfono y el documento se guardan en el almacenamiento
                local de este navegador. Esta demostración no usa una base
                de datos de pacientes.
              </p>
            </div>

            {mensaje && (
              <div
                className="perfil-success"
                role="status"
                style={error ? { color: '#b91c1c' } : undefined}
              >
                {mensaje}
              </div>
            )}

            <div className="perfil-actions">
              <button
                type="button"
                className="perfil-cancel"
                onClick={() => navigate('/dashboard')}
              >
                Cancelar
              </button>

              <button type="submit" className="perfil-save">
                Guardar cambios
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Perfil
