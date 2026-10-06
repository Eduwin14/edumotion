const API_URL = 'https://jsonplaceholder.typicode.com'

export async function obtenerUsuarios() {
  try {
    const respuesta = await fetch(`${API_URL}/users`)

    if (!respuesta.ok) {
      throw new Error('No se pudo obtener la información.')
    }

    const datos = await respuesta.json()

    return datos
  } catch (error) {
    console.error('Error en la API:', error)
    throw error
  }
}

export async function crearReserva(reserva) {
  try {
    const respuesta = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reserva)
    })

    if (!respuesta.ok) {
      throw new Error('No se pudo crear la reserva.')
    }

    const datos = await respuesta.json()

    return datos
  } catch (error) {
    console.error('Error al crear la reserva:', error)
    throw error
  }
}