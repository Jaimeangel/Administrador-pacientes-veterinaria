import Paciente from "./Paciente"

function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 px-3">
      <h2 className="font-black text-center text-3xl">Listado pacientes</h2>
      <p className="text-center text-xl font-black mt-4 mb-5">Administra tus {' '} <span className="text-indigo-600 font-bold">pacientes y citas</span></p>
      <div className="h-screen md:overflow-y-scroll">
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
      </div>
    </div>
  )
}

export default ListadoPacientes
