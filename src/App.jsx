import { useState } from 'react'
import './App.css'

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [mensajeEnviado, setMensajeEnviado] = useState(false)
  const [cursoSeleccionado, setCursoSeleccionado] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    setMensajeEnviado(true)
  }

  const seleccionarCurso = (curso) => {
    setCursoSeleccionado(curso)

    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({
        behavior: 'smooth'
      })
    }, 100)
  }

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#inicio" className="logo" onClick={cerrarMenu}>
          <span className="logo-icon">E</span>
          <span>Edumotion</span>
        </a>

        <button
          className="menu-mobile"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <div className={`nav-links ${menuAbierto ? 'active' : ''}`}>
          <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
          <a href="#nosotros" onClick={cerrarMenu}>Nosotros</a>
          <a href="#cursos" onClick={cerrarMenu}>Cursos</a>
          <a href="#testimonios" onClick={cerrarMenu}>Testimonios</a>
          <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
        </div>

        <button
          className="login-button"
          onClick={() => document.getElementById('contacto')?.scrollIntoView({
            behavior: 'smooth'
          })}
        >
          Iniciar sesión
        </button>

      </nav>


      {/* ================= HERO ================= */}

      <section id="inicio" className="hero-section">

        <div className="hero-content">

          <p className="small-title">
            EDUCACIÓN DIGITAL PARA EL FUTURO
          </p>

          <h1>
            Aprende hoy.
            <br />
            <span>Transforma tu futuro.</span>
          </h1>

          <p className="hero-text">
            En Edumotion conectamos personas con nuevas oportunidades
            de aprendizaje en habilidades digitales, tecnologías
            emergentes y emprendimiento.
          </p>

          <div className="hero-buttons">

            <a href="#cursos" className="primary-button">
              Explorar cursos
            </a>

            <a href="#nosotros" className="secondary-button">
              Conocer Edumotion
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>+500</strong>
              <span>Estudiantes</span>
            </div>

            <div>
              <strong>+15</strong>
              <span>Programas</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Digital</span>
            </div>

          </div>

        </div>


        <div className="hero-card">

          <div className="floating-card card-one">

            <span>💻</span>

            <div>
              <strong>Habilidades digitales</strong>
              <small>Aprende nuevas competencias</small>
            </div>

          </div>


          <div className="main-illustration">

            <div className="circle">
              <span>🚀</span>
            </div>

            <h3>Tu aprendizaje</h3>

            <p>Empieza aquí</p>

            <div className="progress-container">
              <div className="progress-bar"></div>
            </div>

            <small className="progress-text">
              Nuevas oportunidades
            </small>

          </div>


          <div className="floating-card card-two">

            <span>🎯</span>

            <div>
              <strong>Aprendizaje flexible</strong>
              <small>Estudia a tu propio ritmo</small>
            </div>

          </div>

        </div>

      </section>


      {/* ================= NOSOTROS ================= */}

      <section id="nosotros" className="about-section">

        <div className="section-title">

          <p>¿POR QUÉ EDUMOTION?</p>

          <h2>
            Una nueva forma de aprender
          </h2>

          <span>
            Diseñamos experiencias digitales pensadas para las
            necesidades de los estudiantes de hoy.
          </span>

        </div>


        <div className="features">

          <div className="feature-card">

            <div className="feature-icon">⚡</div>

            <h3>Flexibilidad</h3>

            <p>
              Accede a contenidos formativos de manera flexible
              y adapta el aprendizaje a tu ritmo y disponibilidad.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">💡</div>

            <h3>Innovación</h3>

            <p>
              Explora conocimientos relacionados con tecnologías
              emergentes y nuevas habilidades digitales.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">🎓</div>

            <h3>Experiencia</h3>

            <p>
              Una interfaz clara y moderna que facilita la navegación
              y mejora la experiencia de aprendizaje.
            </p>

          </div>

        </div>


        <div className="about-banner">

          <div>
            <span className="banner-number">01</span>

            <h3>
              Aprender también puede ser una experiencia.
            </h3>

            <p>
              Edumotion busca combinar tecnología, formación y
              una experiencia visual sencilla para acercar nuevas
              oportunidades educativas a sus usuarios.
            </p>
          </div>

          <div className="banner-icon">
            💡
          </div>

        </div>

      </section>


      {/* ================= CURSOS ================= */}

      <section id="cursos" className="courses-section">

        <div className="section-title">

          <p>NUESTROS PROGRAMAS</p>

          <h2>
            Aprende habilidades para el mundo digital
          </h2>

          <span>
            Conoce algunos de los programas formativos que
            Edumotion puede ofrecer.
          </span>

        </div>


        <div className="courses">


          {/* CURSO 1 */}

          <article className="course-card">

            <div className="course-image programming">
              <span>💻</span>
            </div>

            <div className="course-content">

              <span className="course-category">
                TECNOLOGÍA
              </span>

              <h3>
                Desarrollo Web
              </h3>

              <p>
                Aprende fundamentos para crear páginas y
                aplicaciones web modernas.
              </p>

              <div className="course-info">

                <span>📚 Nivel básico</span>

                <span>⏱ 8 semanas</span>

              </div>

              <button
                onClick={() => seleccionarCurso('Desarrollo Web')}
              >
                Ver programa
              </button>

            </div>

          </article>


          {/* CURSO 2 */}

          <article className="course-card">

            <div className="course-image technology">
              <span>🤖</span>
            </div>

            <div className="course-content">

              <span className="course-category">
                TECNOLOGÍAS EMERGENTES
              </span>

              <h3>
                Inteligencia Artificial
              </h3>

              <p>
                Conoce conceptos fundamentales de inteligencia
                artificial y sus aplicaciones.
              </p>

              <div className="course-info">

                <span>📚 Introductorio</span>

                <span>⏱ 6 semanas</span>

              </div>

              <button
                onClick={() => seleccionarCurso('Inteligencia Artificial')}
              >
                Ver programa
              </button>

            </div>

          </article>


          {/* CURSO 3 */}

          <article className="course-card">

            <div className="course-image entrepreneurship">
              <span>💼</span>
            </div>

            <div className="course-content">

              <span className="course-category">
                EMPRENDIMIENTO
              </span>

              <h3>
                Ideas que inspiran
              </h3>

              <p>
                Desarrolla ideas y conocimientos útiles para
                iniciar proyectos de emprendimiento.
              </p>

              <div className="course-info">

                <span>📚 Nivel básico</span>

                <span>⏱ 5 semanas</span>

              </div>

              <button
                onClick={() => seleccionarCurso('Ideas que inspiran')}
              >
                Ver programa
              </button>

            </div>

          </article>

        </div>


        {cursoSeleccionado && (

          <div className="course-notification">

            <strong>
              Curso seleccionado:
            </strong>

            <span>
              {cursoSeleccionado}
            </span>

            <button
              onClick={() => setCursoSeleccionado('')}
            >
              ×
            </button>

          </div>

        )}

      </section>


      {/* ================= TESTIMONIOS ================= */}

      <section id="testimonios" className="testimonials-section">

        <div className="section-title">

          <p>EXPERIENCIAS</p>

          <h2>
            Lo que dicen nuestros estudiantes
          </h2>

          <span>
            Estas experiencias representan opiniones de usuarios
            piloto de la propuesta educativa.
          </span>

        </div>


        <div className="testimonials">


          <div className="testimonial">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              “La plataforma me permitió descubrir nuevas
              herramientas digitales y organizar mejor mi
              proceso de aprendizaje.”
            </p>

            <div className="person">

              <div className="avatar">
                S
              </div>

              <div>
                <strong>
                  Samuel Rodríguez
                </strong>

                <small>
                  Estudiante piloto
                </small>
              </div>

            </div>

          </div>


          <div className="testimonial">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              “Me gustó la forma sencilla de presentar los
              contenidos. Es una experiencia clara y fácil
              de navegar.”
            </p>

            <div className="person">

              <div className="avatar">
                L
              </div>

              <div>
                <strong>
                  Laura Martínez
                </strong>

                <small>
                  Estudiante piloto
                </small>
              </div>

            </div>

          </div>


          <div className="testimonial">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              “Encontré temas relacionados con tecnología que
              me ayudaron a ampliar mis conocimientos.”
            </p>

            <div className="person">

              <div className="avatar">
                D
              </div>

              <div>
                <strong>
                  Daniel Torres
                </strong>

                <small>
                  Estudiante piloto
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACTO ================= */}

      <section id="contacto" className="contact-section">

        <div className="contact-text">

          <p>
            ¿TIENES ALGUNA PREGUNTA?
          </p>

          <h2>
            Hablemos sobre tu próximo aprendizaje.
          </h2>

          <span>
            Si quieres conocer más sobre nuestros programas,
            déjanos tus datos y nos pondremos en contacto contigo.
          </span>


          <div className="contact-information">

            <div>
              <strong>📧 Correo</strong>
              <span>contacto@edumotion.com</span>
            </div>

            <div>
              <strong>🌐 Plataforma</strong>
              <span>Edumotion Digital</span>
            </div>

          </div>


          <div className="socials">

            <span>Instagram</span>
            <span>Facebook</span>
            <span>LinkedIn</span>

          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={manejarEnvio}
        >

          <h3>
            Solicita información
          </h3>

          <p>
            Completa el formulario y conoce más sobre nuestros programas.
          </p>


          <label>
            Nombre
          </label>

          <input
            type="text"
            placeholder="Escribe tu nombre"
            required
          />


          <label>
            Correo electrónico
          </label>

          <input
            type="email"
            placeholder="correo@ejemplo.com"
            required
          />


          <label>
            Programa de interés
          </label>

          <select
            defaultValue={cursoSeleccionado}
          >

            <option value="">
              Selecciona un programa
            </option>

            <option value="Desarrollo Web">
              Desarrollo Web
            </option>

            <option value="Inteligencia Artificial">
              Inteligencia Artificial
            </option>

            <option value="Ideas que inspiran">
              Ideas que inspiran
            </option>

          </select>


          <label>
            Mensaje
          </label>

          <textarea
            rows="5"
            placeholder="¿En qué podemos ayudarte?"
            required
          ></textarea>


          <button type="submit">
            Enviar mensaje
          </button>


          {mensajeEnviado && (

            <p className="success-message">
              ✓ ¡Mensaje enviado correctamente!
              Gracias por contactar a Edumotion.
            </p>

          )}

        </form>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-main">

          <div>

            <div className="footer-logo">

              <span className="logo-icon">
                E
              </span>

              <strong>
                Edumotion
              </strong>

            </div>

            <p>
              Educación digital para construir nuevas oportunidades.
            </p>

          </div>


          <div className="footer-column">

            <strong>
              Plataforma
            </strong>

            <a href="#inicio">
              Inicio
            </a>

            <a href="#cursos">
              Cursos
            </a>

            <a href="#nosotros">
              Nosotros
            </a>

          </div>


          <div className="footer-column">

            <strong>
              Información
            </strong>

            <a href="#testimonios">
              Testimonios
            </a>

            <a href="#contacto">
              Contacto
            </a>

            <a href="#contacto">
              Ayuda
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <small>
            © 2026 Edumotion. Proyecto académico.
          </small>

          <span>
            Educación • Tecnología • Innovación
          </span>

        </div>

      </footer>

    </div>
  )
}

export default App