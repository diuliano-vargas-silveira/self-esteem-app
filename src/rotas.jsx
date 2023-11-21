import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ROTAS from "./contantes/rotas";

const ROTAS_SISTEMA = [
  ...ROTAS.MENU,
  ROTAS.LOGIN,
  ROTAS.CADASTRO,
  ROTAS.EDICAO_PERFIL,
];

function Rotas() {
  const rotas = createBrowserRouter(ROTAS_SISTEMA);

  return <RouterProvider router={rotas} />;
}

export default Rotas;
