
const API_URL = 'https://jsonplaceholder.typicode.com'

async function solicitarAPI(url, opciones = {}) {
  let respuesta

  try {
    respuesta = await fetch(url, {
      ...opciones,
      headers: {
        'Content-Type': 'application/json',
        ...opciones.headers
      }
    })
  } catch (error) {
    throw new Error(
      'No se pudo conectar con el servidor. Revisa tu conexión a internet.'
    )
  }

  if (!respuesta.ok) {
    throw new Error(`Error del servidor: ${respuesta.status}`)
  }

  return respuesta.json()
}

export async function obtenerUsuarios() {
  try {
    return await solicitarAPI(`${API_URL}/users`)
  } catch (error) {
    console.error('Error al consultar usuarios:', error)
    throw error
  }
}

export async function crearReserva(reserva) {
  if (
    !reserva.especialidad ||
    !reserva.medico ||
    !reserva.fecha ||
    !reserva.hora
  ) {
    throw new Error('Completa todos los datos de la reserva.')
  }

  try {
    return await solicitarAPI(`${API_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: `Reserva de ${reserva.especialidad}`,
        body: JSON.stringify(reserva),
        userId: 1
      })
    })
  } catch (error) {
    console.error('Error al crear la reserva:', error)
    throw error
  }
}
