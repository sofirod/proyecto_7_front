import { Link, useLocation } from "react-router-dom";
import { formatCLP } from "../../../utils/formatCLP";
import UserContext from "../../../contexts/user/UserContext";
import CuboContext from "../../../contexts/cubo/CuboContext";
import { useContext, useEffect, useState } from "react";

const SingleCubo = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const { cubo } = location?.state;

  const userCtx = useContext(UserContext);
  const { authStatus, cart, editCart, getCart } = userCtx;

  const { setCurrentCubo } = useContext(CuboContext);

  useEffect(() => {
    if (!cubo) {
      // Si el usuario recarga la página y no hay data, redirigir
      navigate("/Cubos");
      return;
    }

    setCurrentCubo(cubo);
    getCart();
  }, []);

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (quantity === 0) return;

    const item = {
      priceID: cubo.priceID,
      name: cubo.name,
      quantity,
      price: cubo.price,
      img: cubo.img,
      slug: cubo.slug,
    };

    const existingItemIndex = cart.findIndex(
      (el) => el.priceID === item.priceID
    );

    let updatedCart;

    if (existingItemIndex !== -1) {
      // Si ya existe, actualiza la cantidad
      updatedCart = cart.map((el, i) =>
        i === existingItemIndex ? { ...el, quantity: item.quantity } : el
      );
    } else {
      // Si no existe, agrega el nuevo ítem
      updatedCart = [...cart, item];
    }

    await editCart(updatedCart);
  };

  if (!cubo) return null;
  const { name, description, img, price } = cubo;
  const quantityOptions = [0, 1, 2, 3, 4, 5];

  return (
    <main className="max-w-5xl mx-auto pt-16 pb-24 px-6">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Info */}
        <section>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-gray-600 mt-4">{description}</p>
          <p className="mt-4 text-xl font-semibold">
            Precio: {formatCLP(price)}
          </p>

          {/* Select cantidad */}
          {authStatus && (
            <form onSubmit={handleSubmit} className="mt-8">
              <label className="block mb-2 font-medium text-gray-700">
                Cantidad
              </label>
              <select
                className="w-32 border border-gray-300 rounded-md p-2"
                value={quantity}
                onChange={handleChange}
              >
                {quantityOptions.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="btn-product mt-6"
                disabled={quantity === 0}
              >
                {cart.length ? "Modificar carrito" : "Agregar al carrito"}
              </button>
            </form>
          )}

          {!authStatus && (
            <Link to="/registro">
              <button className="btn-product mt-6">
                Regístrate para comprar
              </button>
            </Link>
          )}
        </section>

        {/* Imagen */}
        <figure>
          <img
            src={img}
            alt={description}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </figure>
      </div>
    </main>
  );
};

export default SingleCubo;
