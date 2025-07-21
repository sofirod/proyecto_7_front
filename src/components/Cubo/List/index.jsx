import { useContext, useEffect } from "react"
import CuboContext from '../../../contexts/Cubo/CuboContext'
import { Link } from "react-router-dom";

const CuboList = () => {
  const ctx = useContext(CuboContext);
  const { cubos, getCubos } = ctx;

  useEffect(() => {
    getCubos();
  }, [])
  return (
    <>
      <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-2 flex-column">
        {cubos.length === 0 ? (
          <p>No hay cubos</p>
        ) : (
          cubos.map(cubo => {
            return (
              <div key={cubo._id} className="border flex flex-col">
                <div className="bg-gray-200">
                  <Link to={`/cubos/${cubo.slug}`} state={{ cubo }}>
                    <img
                      src={cubo.img}
                      alt={cubo.description}
                      className="w-full h-96 object-center object-cover"
                    />
                  </Link>
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900">{cubo.name}</h3>
                  <p className="text-gray-500 pb-8">{cubo.description}</p>
                  <Link to={`/cubos/${cubo.slug}`} state={{ cubo }} className="btn-product">
                    <button type="button" className="w-full">
                      Ver cubo
                    </button>
                  </Link>
                </div>
              </div>
            )
          })
        )}
      </section>
    </>
  )
}

export default CuboList