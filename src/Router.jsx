import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserState from "./contexts/user/UserState";
import CuboState from "./contexts/cubo/CuboState";
import Layout from "./components/Layout";
import Home from "./components/Home/index";
import CuboList from "./components/Cubo/List";
import SingleCubo from "./components/Cubo/Single";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/Profile/index";
import Checkout from "./components/Checkout/index";
import SuccessPage from "./components/Success/index";
import CancelPage from "./components/Cancel/index";
import Auth from "./routes/Auth";
import PrivateRoute from "./routes/Private";
import Curso from "./components/Curso.cfop/curso";
const Router = () => {
  return (
    <>
      <UserState>
        <CuboState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
               <Route path="/curso" element={<Curso />} />
                <Route path="/registro" element={<Register />} />
                <Route
                  path="/iniciar-sesion"
                  element={<Auth component={Login} />}
                />
                <Route
                  path="/perfil"
                  element={<PrivateRoute component={Profile} />}
                />
                <Route
                  path="/carrito"
                  element={<PrivateRoute component={Checkout} />}
                />
                <Route path="/cubos" element={<CuboList />} />
                <Route path="/cubos/:slug" element={<SingleCubo />} />
                <Route path="/pago-exitoso" element={<SuccessPage />} />
                <Route path="/pago-cancelado" element={<CancelPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CuboState>
      </UserState>
    </>
  );
};

export default Router;
