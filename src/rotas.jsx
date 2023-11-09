import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ROTAS from "./contantes/rotas";

function Rotas() {
  const rotas = createBrowserRouter(ROTAS.MENU);

  return <RouterProvider router={rotas} />;
}

export default Rotas;
