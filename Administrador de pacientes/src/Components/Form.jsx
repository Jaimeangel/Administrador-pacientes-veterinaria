function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-center text-xl font-black mt-4 mb-5">
          Añade Pacientes y {' '}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          
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
            />
          </div>

          <input 
            type="submit"
            value='agregar paciente' 
            className="bg-indigo-600 w-full p-3 rounded-lg shadow-sm text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          />

        </form>
    </div>
  )
}

export default Form
