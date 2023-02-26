import Form from "./Components/Form";
import Header from "./Components/Header";
import ListadoPacientes from "./Components/ListadoPacientes";


function App() {
  return (
    <div className="container mx-auto mt-7">
      <Header/>
      <div className="mt-12 md:flex justify-center">
        <Form/>
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App;
