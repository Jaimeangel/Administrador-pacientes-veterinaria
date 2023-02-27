import { useEffect } from "react";
import Paciente from "./Paciente"

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 px-3">
      <h2 className="font-black text-center text-3xl">Listado pacientes</h2>
      <p className="text-center text-xl font-black mt-4 mb-5">Administra tus {' '} <span className="text-indigo-600 font-bold">pacientes y citas</span></p>
      <div className="h-screen md:overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            {pacientes.map(paciente=>{
              return <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            })}
          </>):
          <div className="bg-white text-center py-8 rounded-lg shadow-lg">
            <h1 className="font-bold text-3xl">No hay pacientes</h1>
            <p className="text-2xl mt-5">Agrega pacientes</p>
          </div>
        }
      </div>
    </div>
  )
}

export default ListadoPacientes;
