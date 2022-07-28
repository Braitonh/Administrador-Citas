import React, { Fragment, useState, useEffect } from 'react'
import { Formulario } from './components/Formulario'
import { Cita } from './components/Cita'

export const AdministradorApp = () => {


    //Citas en localStorage
    let citasInicialies = JSON.parse(localStorage.getItem('citas'));
    if( !citasInicialies ){
        citasInicialies = [];
    }


    //Arreglo de citas
    const [citas, setCitas] = useState(citasInicialies);


    //useEffect para realizar operaciones cuando el state cambia

    useEffect ( () =>{
        if(citasInicialies){
            localStorage.setItem('citas',JSON.stringify(citas))
        }else{
            localStorage.setItem('citas', JSON.stringify([]))
        }
    }, [citas]);

    //Funcion que tome las citas actuales y agregue una nueva
    const crearCita = (cita) =>{
        setCitas([
            ...citas,
            cita
        ]);
    }

    //Funcion que elimina cita
    const handleDelete = (id) =>{
        const nuevasCitas = citas.filter( (cita) => cita.id !== id );
        setCitas(nuevasCitas);
    }

    //Mensaje condicional
    const titulo = citas.length === 0 ?  'No hay citas' : 'Administra tus citas';


  return (

    <Fragment>
        <div>
            <h1>Administrador de Citas</h1>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='one-half column'>
                    <Formulario
                        crearCita={ crearCita }
                    />
                </div>
                <div className='one-half column'>
                    <h2>{titulo}</h2>
                    {
                        citas.map( cita =>(
                            <Cita
                                key={cita.id}
                                cita={cita}
                                handleDelete= { handleDelete }
                            />
                        ))
                    }
                </div>
            </div>
        </div>

        

        
    </Fragment>

    
  )
}
