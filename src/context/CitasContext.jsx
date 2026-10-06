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

export function CitasProvider({ children }) {

  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('edumed_citas')

    if (citasGuardadas) {
      return JSON.parse(citasGuardadas)
    }

    return citasIniciales
  })

  // Guardar las citas cada vez que cambien
  useEffect(() => {
    localStorage.setItem(
      'edumed_citas',
      JSON.stringify(citas)
    )
  }, [citas])


  const cancelarCita = (id) => {

    setCitas((citasActuales) =>
      citasActuales.map((cita) =>
        cita.id === id
          ? {
              ...cita,
              estado: 'Cancelada'
            }
          : cita
      )
    )

  }


  const reagendarCita = (
    id,
    nuevaFecha,
    nuevaHora
  ) => {

    setCitas((citasActuales) =>
      citasActuales.map((cita) =>
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

  }


  const agregarCita = (nuevaCita) => {

    setCitas((citasActuales) => [
      ...citasActuales,
      {
        ...nuevaCita,
        id: Date.now()
      }
    ])

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