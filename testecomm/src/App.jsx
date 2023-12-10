import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import { Vehicles } from "./pages/vehicles/Vehicles";
import { Vehicle } from "./pages/vehicle/Vehicle";
import { Cart } from "./pages/cart/Cart";
import Register from "./pages/register/Register";
import { AuthProvider } from "./hooks/Authcontext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />,
      </Layout>
    ),
  },

  {
    path: "about",
    element: (
      <Layout>
        <About />,
      </Layout>
    ),
  },

  // {
  //   path: "newsandupdates",
  //   element: <NewsAndUpdates />,
  // },

  {
    path: "vehicles",
    element: (
      <Layout>
        <Vehicles />,
      </Layout>
    ),
  },

  {
    path: "vehicles/:vehicleId",
    element: (
      <Layout>
        <Vehicle />,
      </Layout>
    ),
  },

  {
    path: "cart",
    element: (
      <Layout>
        <Cart />,
      </Layout>
    ),
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
