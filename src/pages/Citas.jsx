import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCitas } from '../context/CitasContext'
import './Citas.css'

function Citas() {
  const navigate = useNavigate()
  const { citas, cancelarCita, reagendarCita } = useCitas()

  const [citaSeleccionada, setCitaSeleccionada] = useState(null)
  const [mostrarReagendar, setMostrarReagendar] = useState(false)
  const [nuevaFecha, setNuevaFecha] = useState('')
  const [nuevaHora, setNuevaHora] = useState('')

  const abrirReagendar = (cita) => {
    setCitaSeleccionada(cita)
    setNuevaFecha('')
    setNuevaHora('')
    setMostrarReagendar(true)
  }

  const confirmarReagendamiento = (e) => {
    e.preventDefault()

    if (!nuevaFecha || !nuevaHora) {
      return
    }

    const fechaFormateada = new Date(
      `${nuevaFecha}T${nuevaHora}`
    ).toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    reagendarCita(
      citaSeleccionada.id,
      fechaFormateada,
      nuevaHora
    )

    setMostrarReagendar(false)
    setCitaSeleccionada(null)
  }

  const manejarCancelacion = (id) => {
    const confirmar = window.confirm(
      '¿Estás seguro de que deseas cancelar esta cita?'
    )

    if (confirmar) {
      cancelarCita(id)
    }
  }

  return (
    <div className="citas-page">

      {/* ENCABEZADO */}

      <header className="citas-header">

        <div>
          <button
            className="back-button"
            onClick={() => navigate('/dashboard')}
          >
            ← Volver al inicio
          </button>

          <span className="page-label">
            GESTIÓN DE CITAS
          </span>

          <h1>Mis citas médicas</h1>

          <p>
            Consulta, cancela o reagenda tus citas programadas.
          </p>
        </div>

        <button
          className="new-appointment-button"
          onClick={() => navigate('/agendar')}
        >
          + Agendar nueva cita
        </button>

      </header>


      {/* RESUMEN */}

      <section className="citas-summary">

        <div>
          <span>Total de citas</span>
          <strong>{citas.length}</strong>
        </div>

        <div>
          <span>Confirmadas</span>
          <strong>
            {
              citas.filter(
                (cita) => cita.estado === 'Confirmada'
              ).length
            }
          </strong>
        </div>

        <div>
          <span>Canceladas</span>
          <strong>
            {
              citas.filter(
                (cita) => cita.estado === 'Cancelada'
              ).length
            }
          </strong>
        </div>

      </section>


      {/* LISTA DE CITAS */}

      <section className="appointments-section">

        <div className="section-title-citas">
          <h2>Próximas citas</h2>

          <span>
            {citas.length} citas registradas
          </span>
        </div>


        <div className="appointments-list">

          {citas.map((cita) => (

            <article
              className={`appointment-item ${
                cita.estado === 'Cancelada'
                  ? 'cancelled'
                  : ''
              }`}
              key={cita.id}
            >

              <div className="appointment-date">
                <span>📅</span>
                <strong>{cita.fecha}</strong>
                <small>{cita.hora}</small>
              </div>


              <div className="appointment-main">

                <div className="appointment-title">

                  <div className="medical-icon">
                    🩺
                  </div>

                  <div>
                    <span className="appointment-category">
                      {cita.especialidad}
                    </span>

                    <h3>{cita.medico}</h3>

                    <p>
                      📍 {cita.lugar}
                    </p>
                  </div>

                </div>


                <div className="appointment-status-area">

                  <span
                    className={`status ${
                      cita.estado.toLowerCase()
                    }`}
                  >
                    {cita.estado}
                  </span>

                </div>


                <div className="appointment-buttons">

                  {cita.estado !== 'Cancelada' && (
                    <>
                      <button
                        className="reschedule-button"
                        onClick={() => abrirReagendar(cita)}
                      >
                        🔄 Reagendar
                      </button>

                      <button
                        className="cancel-button"
                        onClick={() =>
                          manejarCancelacion(cita.id)
                        }
                      >
                        ✕ Cancelar
                      </button>
                    </>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* MODAL REAGENDAR */}

      {mostrarReagendar && (
        <div className="modal-background">

          <div className="reschedule-modal">

            <button
              className="close-modal"
              onClick={() => setMostrarReagendar(false)}
            >
              ×
            </button>

            <div className="modal-icon">
              🔄
            </div>

            <h2>Reagendar cita</h2>

            <p>
              Selecciona una nueva fecha y horario para tu
              consulta.
            </p>

            <form onSubmit={confirmarReagendamiento}>

              <label>
                Nueva fecha
              </label>

              <input
                type="date"
                value={nuevaFecha}
                onChange={(e) =>
                  setNuevaFecha(e.target.value)
                }
                required
              />

              <label>
                Nuevo horario
              </label>

              <input
                type="time"
                value={nuevaHora}
                onChange={(e) =>
                  setNuevaHora(e.target.value)
                }
                required
              />

              <div className="modal-actions">

                <button
                  type="button"
                  className="modal-cancel"
                  onClick={() =>
                    setMostrarReagendar(false)
                  }
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="modal-confirm"
                >
                  Confirmar cambio
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  )
}

export default Citas