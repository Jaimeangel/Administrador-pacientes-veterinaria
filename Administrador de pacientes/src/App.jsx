import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ListadoPacientes from "./Components/ListadoPacientes";


function App() {
  const [pacientes,setPacientes]=useState([])
  const [paciente,setPaciente]=useState({})

  function eliminarPaciente(id){
    const pacienteEliminado=pacientes.filter(paciente=>paciente.id!=id)
    setPacientes([...pacienteEliminado])
  }

  return (
    <div className="container mx-auto mt-7">
      <Header/>
      <div className="mt-12 md:flex justify-center">
        <Form
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;
