import { ReactComponent as IconeSobre } from "../assets/icones/sobre.icone.svg";
import { ReactComponent as IconeMeditacoes } from "../assets/icones/meditacoes.icone.svg";
import { ReactComponent as IconeDicas } from "../assets/icones/dicas.icone.svg";
import { ReactComponent as IconeAutocuidado } from "../assets/icones/autocuidado.icone.svg";
import { ReactComponent as IconePerfil } from "../assets/icones/perfil.icone.svg";
import Sobre from "../telas/sobre/sobre.tela";
import Meditacoes from "../telas/meditacoes/meditacoes.tela";
import Dicas from "../telas/dicas/dicas.tela";
import AutoCuidado from "../telas/autocuidado/autocuidado.tela";
import Perfil from "../telas/perfil/perfil.tela";
import Cadastro from "../telas/cadastro/cadastro.tela";
import Login from "../telas/login/login.tela";

const ROTAS = {
  MENU: [
    {
      nome: "Sobre",
      getIcone: (className) => <IconeSobre className={className} />,
      path: "/",
      element: <Sobre />,
    },
    {
      nome: "Meditações",
      getIcone: (className) => <IconeMeditacoes className={className} />,
      path: "/meditacoes",
      element: <Meditacoes />,
    },
    {
      nome: "Dicas",
      getIcone: (className) => <IconeDicas className={className} />,
      path: "/dicas",
      element: <Dicas />,
    },
    {
      nome: "Autocuidado",
      getIcone: (className) => <IconeAutocuidado className={className} />,
      path: "/autocuidado",
      element: <AutoCuidado />,
    },
    {
      nome: "Meu perfil",
      getIcone: (className) => <IconePerfil className={className} />,
      path: "/meu-perfil",
      element: <Perfil />,
    },
  ],
  CADASTRO: { nome: "Cadastro", path: "/cadastro", element: <Cadastro /> },
  LOGIN: { nome: "Login", path: "/login", element: <Login /> },
};

export default ROTAS;
