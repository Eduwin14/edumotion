import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Perfil.css'

function Perfil() {
  const navigate = useNavigate()
  const { usuario } = useAuth()

  const [nombre, setNombre] = useState(usuario?.nombre || '')
  const [correo, setCorreo] = useState(usuario?.correo || '')
  const [telefono, setTelefono] = useState('300 123 4567')
  const [documento, setDocumento] = useState('1.234.567.890')
  const [mensaje, setMensaje] = useState('')

  const guardarCambios = (e) => {
    e.preventDefault()

    setMensaje('Los datos del perfil se actualizaron correctamente.')

    setTimeout(() => {
      setMensaje('')
    }, 4000)
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

        <p>
          Consulta y actualiza tu información personal.
        </p>

      </header>


      <main className="perfil-container">

        <section className="perfil-card">

          <div className="perfil-top">

            <div className="perfil-avatar">
              {usuario?.nombre?.charAt(0) || 'C'}
            </div>

            <div>
              <h2>{nombre}</h2>
              <p>Paciente de EduMed</p>
            </div>

          </div>


          <form onSubmit={guardarCambios}>

            <div className="perfil-grid">

              <div className="perfil-field">

                <label>
                  Nombre completo
                </label>

                <input
                  type="text"
                  value={nombre}
                  onChange={(e) =>
                    setNombre(e.target.value)
                  }
                  required
                />

              </div>


              <div className="perfil-field">

                <label>
                  Correo electrónico
                </label>

                <input
                  type="email"
                  value={correo}
                  onChange={(e) =>
                    setCorreo(e.target.value)
                  }
                  required
                />

              </div>


              <div className="perfil-field">

                <label>
                  Número de documento
                </label>

                <input
                  type="text"
                  value={documento}
                  onChange={(e) =>
                    setDocumento(e.target.value)
                  }
                  required
                />

              </div>


              <div className="perfil-field">

                <label>
                  Teléfono
                </label>

                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) =>
                    setTelefono(e.target.value)
                  }
                  required
                />

              </div>

            </div>


            <div className="perfil-info">

              <strong>🔒 Información segura</strong>

              <p>
                Tus datos son utilizados únicamente para
                gestionar tu experiencia dentro de la
                plataforma de reservas médicas.
              </p>

            </div>


            {mensaje && (
              <div className="perfil-success">
                ✓ {mensaje}
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

              <button
                type="submit"
                className="perfil-save"
              >
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