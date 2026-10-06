import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCitas } from '../context/CitasContext'
import { crearReserva } from '../services/api'
import './Agendar.css'

function Agendar() {
  const navigate = useNavigate()
  const { agregarCita } = useCitas()

  const [especialidad, setEspecialidad] = useState('')
  const [medico, setMedico] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')

  const [cargando, setCargando] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [tipoMensaje, setTipoMensaje] = useState('')

  const manejarEnvio = async (e) => {
    e.preventDefault()

    setMensaje('')
    setTipoMensaje('')
    setCargando(true)

    try {
      const fechaFormateada = new Date(
        `${fecha}T${hora}`
      ).toLocaleDateString('es-CO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })

      const nuevaReserva = {
        especialidad,
        medico,
        fecha: fechaFormateada,
        hora,
        lugar: 'Centro Médico EduMed',
        estado: 'Confirmada'
      }

      // Enviamos la información a la API REST
      await crearReserva(nuevaReserva)

      // Guardamos también la cita en el estado de la aplicación
      agregarCita(nuevaReserva)

      setMensaje('¡Cita agendada correctamente!')
      setTipoMensaje('exito')

      setEspecialidad('')
      setMedico('')
      setFecha('')
      setHora('')

    } catch (error) {
      setMensaje(
        'No fue posible registrar la cita. Intenta nuevamente.'
      )

      setTipoMensaje('error')

    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="agendar-page">

      <header className="agendar-header">

        <button
          className="back-button"
          onClick={() => navigate('/dashboard')}
        >
          ← Volver al inicio
        </button>

        <span>RESERVA MÉDICA</span>

        <h1>Agendar una cita</h1>

        <p>
          Selecciona la especialidad, el médico y el horario
          que prefieras.
        </p>

      </header>

      <main className="agendar-container">

        <section className="agendar-card">

          <div className="form-title">

            <div className="form-icon">
              📅
            </div>

            <div>
              <h2>Información de la cita</h2>

              <p>
                Completa los datos para realizar tu reserva.
              </p>
            </div>

          </div>


          <form onSubmit={manejarEnvio}>

            <div className="form-row">

              <div className="agendar-field">

                <label>
                  Especialidad médica
                </label>

                <select
                  value={especialidad}
                  onChange={(e) => {
                    setEspecialidad(e.target.value)
                    setMedico('')
                  }}
                  required
                >

                  <option value="">
                    Selecciona una especialidad
                  </option>

                  <option value="Medicina general">
                    Medicina general
                  </option>

                  <option value="Odontología">
                    Odontología
                  </option>

                  <option value="Pediatría">
                    Pediatría
                  </option>

                  <option value="Dermatología">
                    Dermatología
                  </option>

                  <option value="Cardiología">
                    Cardiología
                  </option>

                </select>

              </div>


              <div className="agendar-field">

                <label>
                  Médico
                </label>

                <select
                  value={medico}
                  onChange={(e) =>
                    setMedico(e.target.value)
                  }
                  required
                  disabled={!especialidad}
                >

                  <option value="">
                    Selecciona un médico
                  </option>

                  {especialidad === 'Medicina general' && (
                    <>
                      <option>
                        Dr. Andrés Martínez
                      </option>

                      <option>
                        Dr. Felipe Torres
                      </option>
                    </>
                  )}

                  {especialidad === 'Odontología' && (
                    <>
                      <option>
                        Dra. Laura Gómez
                      </option>

                      <option>
                        Dr. Juan Pérez
                      </option>
                    </>
                  )}

                  {especialidad === 'Pediatría' && (
                    <option>
                      Dra. Carolina Ramírez
                    </option>
                  )}

                  {especialidad === 'Dermatología' && (
                    <option>
                      Dra. Sofía Herrera
                    </option>
                  )}

                  {especialidad === 'Cardiología' && (
                    <option>
                      Dr. Miguel Sánchez
                    </option>
                  )}

                </select>

              </div>

            </div>


            <div className="form-row">

              <div className="agendar-field">

                <label>
                  Fecha de la cita
                </label>

                <input
                  type="date"
                  value={fecha}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) =>
                    setFecha(e.target.value)
                  }
                  required
                />

              </div>


              <div className="agendar-field">

                <label>
                  Hora de la cita
                </label>

                <select
                  value={hora}
                  onChange={(e) =>
                    setHora(e.target.value)
                  }
                  required
                >

                  <option value="">
                    Selecciona un horario
                  </option>

                  <option value="8:00 AM">
                    8:00 AM
                  </option>

                  <option value="9:00 AM">
                    9:00 AM
                  </option>

                  <option value="10:30 AM">
                    10:30 AM
                  </option>

                  <option value="11:30 AM">
                    11:30 AM
                  </option>

                  <option value="2:00 PM">
                    2:00 PM
                  </option>

                  <option value="3:30 PM">
                    3:30 PM
                  </option>

                  <option value="4:30 PM">
                    4:30 PM
                  </option>

                </select>

              </div>

            </div>


            <div className="appointment-info">

              <strong>
                ℹ️ Información importante
              </strong>

              <p>
                Recuerda asistir con algunos minutos de
                anticipación y llevar tu documento de identidad.
              </p>

            </div>


            {mensaje && (
              <div
                className={
                  tipoMensaje === 'exito'
                    ? 'booking-message'
                    : 'booking-message booking-error'
                }
              >
                {mensaje}
              </div>
            )}


            <div className="form-actions">

              <button
                type="button"
                className="cancel-form-button"
                onClick={() => navigate('/dashboard')}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="booking-button"
                disabled={cargando}
              >
                {cargando
                  ? 'Registrando...'
                  : '✓ Confirmar cita'}
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>
  )
}

export default Agendar