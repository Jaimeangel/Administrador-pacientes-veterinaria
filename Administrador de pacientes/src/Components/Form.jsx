import { useEffect, useState } from "react"
import Error from "./Error";

function Form({pacientes,setPacientes,paciente,setPaciente}) {
  const [mascota,setMascota]=useState('');
  const [propietario,setPropietario]=useState('');
  const [email,setEmail]=useState('');
  const [date,setDate]=useState('');
  const [sintomas,setSintomas]=useState('');
  const [error,setError]=useState(false);

  function generateId(){
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();

    if([mascota,propietario,email,date,sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)

    const objetoPaciente={
      mascota,
      propietario,
      email,
      date,
      sintomas
    }

    if(Object.keys(paciente).length>0){
      objetoPaciente.id=paciente.id
      let pacienteModificar=pacientes.map(pacienteState=>pacienteState.id===paciente.id?objetoPaciente:pacienteState)
      setPacientes([...pacienteModificar])
      setPaciente({})
    }else{
      objetoPaciente.id=generateId()
      setPacientes([...pacientes,objetoPaciente])
    }

    setMascota('')
    setPropietario('')
    setEmail('')
    setDate('')
    setSintomas('')

  }
  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      console.log('Aqui si hay algo')
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setDate(paciente.date)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  return (
    <div className="md:w-1/2 lg:w-2/5 px-3">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-center text-xl font-black mt-4 mb-5">
          Añade Pacientes y {' '}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form  onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          
          {error && <Error texto={'Todos los campos son obligatorios'}/>}

          <div className="mb-5">
            <label 
              htmlFor="mascota"
              className="block uppercase font-bold text-gray-600"
            >
              Nombre de la mascota
            </label>

            <input 
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md"
              value={mascota}
              onChange={(e)=>setMascota(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="propietario"
              className="block uppercase font-bold text-gray-600"
            >
              Nombre del propietario
            </label>

            <input 
              id="mascota"
              type="text"
              placeholder="Nombre del propietario"
              className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md"
              value={propietario}
              onChange={(e)=>setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="email"
              className="block uppercase font-bold text-gray-600"
            >
              Email del propietario
            </label>

            <input 
              id="email"
              type="email"
              placeholder="Email del propietario"
              className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="email"
              className="block uppercase font-bold text-gray-600"
            >
              Fecha de alta
            </label>

            <input 
              id="alta"
              type="date"
              className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="sintomas"
              className="block uppercase font-bold text-gray-600"
            >
              Sintomas
            </label>
            <textarea 
              id="sintomas"
              className="w-full border-2 p-2 mt-2 placeholder-gray-600 rounded-md"
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={(e)=>setSintomas(e.target.value)}
            />
          </div>

          <input 
            type="submit"
            value={Object.keys(paciente).length!=0 ?'editar paciente':'agregar paciente' }
            className="bg-indigo-600 w-full p-3 rounded-lg text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all shadow-md"
          />

        </form>
    </div>
  )
}

export default Form
