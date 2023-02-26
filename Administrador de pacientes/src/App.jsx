import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ListadoPacientes from "./Components/ListadoPacientes";


function App() {
  const [pacientes,setPacientes]=useState([])

  return (
    <div className="container mx-auto mt-7">
      <Header/>
      <div className="mt-12 md:flex justify-center">
        <Form
          setPacientes={setPacientes}
          pacientes={pacientes}
        />
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App;
