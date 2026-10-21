
import { createContext, useContext, useEffect, useState } from 'react'

const CitasContext = createContext()

const citasIniciales = [
  {
    id: 1,
    especialidad: 'Medicina general',
    medico: 'Dr. Andrés Martínez',
    fecha: '15 de octubre de 2026',
    hora: '10:30 AM',
    lugar: 'Centro Médico EduMed',
    estado: 'Confirmada'
  },
  {
    id: 2,
    especialidad: 'Odontología',
    medico: 'Dra. Laura Gómez',
    fecha: '22 de octubre de 2026',
    hora: '2:00 PM',
    lugar: 'Centro Médico EduMed',
    estado: 'Confirmada'
  },
  {
    id: 3,
    especialidad: 'Medicina general',
    medico: 'Dr. Felipe Torres',
    fecha: '5 de noviembre de 2026',
    hora: '9:00 AM',
    lugar: 'Clínica Central',
    estado: 'Pendiente'
  }
]

const obtenerCitasGuardadas = () => {
  try {
    const guardadas = localStorage.getItem('edumed_citas')

    if (guardadas) {
      const datos = JSON.parse(guardadas)

      if (Array.isArray(datos)) {
        return datos
      }
    }
  } catch (error) {
    console.error('No se pudieron recuperar las citas:', error)
  }

  return citasIniciales
}

export function CitasProvider({ children }) {
  const [citas, setCitas] = useState(obtenerCitasGuardadas)

  useEffect(() => {
    try {
      localStorage.setItem('edumed_citas', JSON.stringify(citas))
    } catch (error) {
      console.error('No se pudieron guardar las citas:', error)
    }
  }, [citas])

  const cancelarCita = (id) => {
    setCitas((actuales) =>
      actuales.map((cita) =>
        cita.id === id
          ? { ...cita, estado: 'Cancelada' }
          : cita
      )
    )
  }

  const reagendarCita = (id, nuevaFecha, nuevaHora) => {
    if (!nuevaFecha || !nuevaHora) {
      return false
    }

    setCitas((actuales) =>
      actuales.map((cita) =>
        cita.id === id
          ? {
              ...cita,
              fecha: nuevaFecha,
              hora: nuevaHora,
              estado: 'Confirmada'
            }
          : cita
      )
    )

    return true
  }

  const agregarCita = (nuevaCita) => {
    if (
      !nuevaCita.especialidad ||
      !nuevaCita.medico ||
      !nuevaCita.fecha ||
      !nuevaCita.hora
    ) {
      return false
    }

    setCitas((actuales) => [
      ...actuales,
      {
        ...nuevaCita,
        id: Date.now()
      }
    ])

    return true
  }

  return (
    <CitasContext.Provider
      value={{
        citas,
        cancelarCita,
        reagendarCita,
        agregarCita
      }}
    >
      {children}
    </CitasContext.Provider>
  )
}

export function useCitas() {
  return useContext(CitasContext)
}
