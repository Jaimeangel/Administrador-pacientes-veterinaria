function Paciente({paciente,setPaciente,eliminarPaciente}) {
  const {mascota,propietario,email,date,sintomas,id}=paciente;
  return (
    <div  className="bg-white p-5 rounded-lg mb-4 shadow-md">

      <div className="my-1">
        <p><span className="font-bold">Nombre:{' '}</span>{mascota}</p>
      </div>

      <div className="my-1">
        <p><span className="font-bold">Propietario:{' '}</span>{propietario}</p>
      </div>

      <div className="my-1">
        <p><span className="font-bold">Email:{' '}</span>{email}</p>
      </div>

      <div className="my-1">
        <p><span className="font-bold">Fecha de alta:{' '}</span>{date}</p>
      </div>

      <div className="my-1">
        <p><span className="font-bold">Sintomas:{' '}</span>{sintomas}</p>
      </div>

      <div>

        <button 
          type="button"
          className="bg-green-500 hover:bg-green-600 mt-3 py-2 px-7 rounded-md mr-5 uppercase font-bold cursor-pointer shadow-sm"
          onClick={()=>setPaciente(paciente)}
          >editar
        </button>

        <button 
          type="button"
          className="bg-red-500 hover:bg-red-600 mt-3 py-2 px-7 rounded-md mr-5 uppercase font-bold cursor-pointer shadow-sm"
          onClick={()=>eliminarPaciente(id)}
          >eliminar
        </button>

      </div>

    </div>
  )
}

export default Paciente;
