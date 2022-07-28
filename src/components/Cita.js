import React from 'react'

export const Cita = ({cita, handleDelete}) => {

  const { mascota, propietario, fecha, sintomas,id} = cita;
  return (
    <div className='cita'>
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>


        <button
          className='button eliminar u-full-width'
          onClick={ () => handleDelete(id) }
        >Eliminar</button>
    </div>
  )
}
