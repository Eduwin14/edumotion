import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Dashboard.css'

function Dashboard() {
  const { usuario, cerrarSesion } = useAuth()
  const navigate = useNavigate()

  const manejarCerrarSesion = () => {
    cerrarSesion()
    navigate('/login')
  }

  return (
    <div className="dashboard">

      {/* BARRA LATERAL */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">+</div>

          <div>
            <strong>EduMed</strong>
            <span>Salud digital</span>
          </div>
        </div>

        <nav className="sidebar-menu">

          <button
            className="menu-item active"
            onClick={() => navigate('/dashboard')}
          >
            <span>🏠</span>
            Inicio
          </button>

          <button
            className="menu-item"
            onClick={() => navigate('/citas')}
          >
            <span>📅</span>
            Mis citas
          </button>

          <button
            className="menu-item"
            onClick={() => navigate('/agendar')}
          >
            <span>➕</span>
            Agendar cita
          </button>

          <button
            className="menu-item"
            onClick={() => navigate('/perfil')}
          >
            <span>👤</span>
            Mi perfil
          </button>

        </nav>

        <button
          className="logout-button"
          onClick={manejarCerrarSesion}
        >
          🚪 Cerrar sesión
        </button>

      </aside>


      {/* CONTENIDO PRINCIPAL */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>

            <span className="welcome-small">
              PANEL DEL PACIENTE
            </span>

            <h1>
              Hola, {usuario?.nombre?.split(' ')[0]} 👋
            </h1>

            <p>
              Consulta y administra tus citas médicas.
            </p>

          </div>


          <div className="user-profile">

            <div className="user-avatar">
              {usuario?.nombre?.charAt(0)}
            </div>

            <div>
              <strong>
                {usuario?.nombre}
              </strong>

              <span>
                Paciente
              </span>
            </div>

          </div>

        </header>


        {/* TARJETAS RESUMEN */}
        <section className="summary-cards">

          <div className="summary-card">

            <div className="summary-icon blue">
              📅
            </div>

            <div>
              <span>
                Próxima cita
              </span>

              <strong>
                15 de octubre
              </strong>
            </div>

          </div>


          <div className="summary-card">

            <div className="summary-icon green">
              ✓
            </div>

            <div>
              <span>
                Citas atendidas
              </span>

              <strong>
                8
              </strong>
            </div>

          </div>


          <div className="summary-card">

            <div className="summary-icon orange">
              🩺
            </div>

            <div>
              <span>
                Especialidad
              </span>

              <strong>
                Medicina general
              </strong>
            </div>

          </div>

        </section>


        {/* PRÓXIMA CITA */}
        <section className="next-appointment">

          <div className="section-heading">

            <div>

              <span>
                PRÓXIMA CITA
              </span>

              <h2>
                Tu próxima consulta
              </h2>

            </div>

            <button
              onClick={() => navigate('/citas')}
              className="view-all"
            >
              Ver todas
            </button>

          </div>


          <div className="appointment-card">

            <div className="doctor-avatar">
              🩺
            </div>


            <div className="doctor-info">

              <span className="appointment-status">
                CONFIRMADA
              </span>

              <h3>
                Consulta de medicina general
              </h3>

              <p>
                Dr. Andrés Martínez
              </p>

              <div className="appointment-details">

                <span>
                  📅 15 de octubre de 2026
                </span>

                <span>
                  🕐 10:30 AM
                </span>

                <span>
                  📍 Centro Médico EduMed
                </span>

              </div>

            </div>


            <div className="appointment-actions">

              <button
                onClick={() => navigate('/citas')}
                className="primary-action"
              >
                Administrar cita
              </button>

            </div>

          </div>

        </section>


        {/* ACCIONES RÁPIDAS */}
        <section className="quick-section">

          <div className="section-heading">

            <div>

              <span>
                ACCESOS RÁPIDOS
              </span>

              <h2>
                ¿Qué deseas hacer?
              </h2>

            </div>

          </div>


          <div className="quick-actions">

            <button
              onClick={() => navigate('/agendar')}
              className="quick-card"
            >

              <div className="quick-icon">
                ➕
              </div>

              <div>

                <strong>
                  Agendar una cita
                </strong>

                <span>
                  Selecciona especialidad, médico y horario.
                </span>

              </div>

              <b>
                →
              </b>

            </button>


            <button
              onClick={() => navigate('/citas')}
              className="quick-card"
            >

              <div className="quick-icon">
                📅
              </div>

              <div>

                <strong>
                  Consultar mis citas
                </strong>

                <span>
                  Revisa tus próximas consultas médicas.
                </span>

              </div>

              <b>
                →
              </b>

            </button>


            <button
              onClick={() => navigate('/perfil')}
              className="quick-card"
            >

              <div className="quick-icon">
                👤
              </div>

              <div>

                <strong>
                  Actualizar mi perfil
                </strong>

                <span>
                  Consulta y modifica tus datos personales.
                </span>

              </div>

              <b>
                →
              </b>

            </button>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Dashboard