import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <main className="text-center px-4 mt-24 mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Bienvenido a Curbershop
        </h1>
        <p className="mt-3 mx-auto text-gray-500">
          Accede al menu para ver nuestro catalogo de productos.
        </p>
        <section className="mt-16 mx-auto max-w-md">
          <article className="mb-16">
            <Link to='/cubos' className='btn-product'>
              Ver el menu de productos
            </Link>
        </article>
        <div className="mt-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Sabías qué?</h2>
            <p className="text-gray-600">
              El método CFOP es uno de los más usados para resolver el cubo Rubik de forma rápida y eficiente.
            </p>
          </div>

          {/* Espacio para imagen y botón */}
          <div className="mt-8 flex flex-col items-center bg-white rounded-lg shadow p-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl30mOzOg5itx_ViyLv_zusQVFQFn9HyHCIQ&s
              alt="Cubo Rubik
              className="w-40 h-40 object-cover rounded mb-4"
            />
            <Link to='/curso'>
              <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
                Ir al curso de CFOP
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
