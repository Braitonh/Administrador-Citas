import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



export const Formulario = ({crearCita}) => {

    //setCita se encargara de actualizar las citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    //handleInputChange se ejecuta cada vez que se cambia algo en el input
    const handleInputChange = ( e ) =>{
        setCita({
            ...cita,
            [e.target.name] : e.target.value,
        })
    }



    //extraer los valores
    const { mascota, propietario, fecha, sintomas} = cita;

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return;
        }

        //Asignar un Id
        cita.id = uuidv4();
        
        //Crear Cita
        crearCita(cita);

        //Reiniciar Cita
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            sintomas: ''
        })
    }

  return (
    <Fragment>

        <h2>Crear Cita</h2>

        { error ?  <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
        <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>

            <input
                type='text'
                name='mascota'
                className='u-full-width'
                placeholder='Nombre Mascota'
                onChange={handleInputChange}
                value={mascota}
            />

            <label>Nombre Dueño</label>

            <input
                type='text'
                name='propietario'
                className='u-full-width'
                placeholder='Nombre Dueño de la mascota'
                onChange={handleInputChange}
                value={propietario}
            />

            <label>Fecha</label>

            <input
                type='date'
                name='fecha'
                className='u-full-width'
                onChange={handleInputChange}
                value={fecha}
            />

            <label>Sintoma</label>

            <textarea
                className='u-full-width'
                name='sintomas'
                onChange={handleInputChange}
                value={sintomas}
            ></textarea>

            <button
                type='submit'
                className='u-full-width button-primary'
            >Agregar Cita</button>

        </form>
    </Fragment>
  )
}
