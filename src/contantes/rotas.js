import { ReactComponent as IconSobre } from "../assets/icones/sobre.icone.svg";
import { ReactComponent as IconMeditacoes } from "../assets/icones/meditacoes.icone.svg";
import { ReactComponent as IconDicas } from "../assets/icones/dicas.icone.svg";
import { ReactComponent as IconAutocuidado } from "../assets/icones/autocuidado.icone.svg";
import { ReactComponent as IconPerfil } from "../assets/icones/perfil.icone.svg";
import { ReactComponent as IconAjuda } from "../assets/icones/ajuda.icone.svg";
import Sobre from "../telas/sobre/sobre.tela";
import Meditacoes from "../telas/meditacoes/meditacoes.tela";
import Dicas from "../telas/dicas/dicas.tela";
import AutoCuidado from "../telas/autocuidado/autocuidado.tela";
import Perfil from "../telas/perfil/perfil.tela";
import Ajuda from "../telas/ajuda/ajuda.tela";
import Cadastro from "../telas/cadastro/cadastro.tela";
import Login from "../telas/login/login.tela";

const ROTAS = {
  MENU: [
    {
      nome: "Sobre",
      getIcone: (className) => <IconSobre className={className} />,
      path: "/",
      element: <Sobre />,
    },
    {
      nome: "Meditações",
      getIcone: (className) => <IconMeditacoes className={className} />,
      path: "/meditacoes",
      element: <Meditacoes />,
    },
    {
      nome: "Dicas",
      getIcone: (className) => <IconDicas className={className} />,
      path: "/dicas",
      element: <Dicas />,
    },
    {
      nome: "Autocuidado",
      getIcone: (className) => <IconAutocuidado className={className} />,
      path: "/autocuidado",
      element: <AutoCuidado />,
    },
    {
      nome: "Meu perfil",
      getIcone: (className) => <IconPerfil className={className} />,
      path: "/meu-perfil",
      element: <Perfil />,
    },
    {
      nome: "Ajuda",
      getIcone: (className) => <IconAjuda className={className} />,
      path: "/ajuda",
      element: <Ajuda />,
    },
  ],
  CADASTRO: { nome: "Cadastro", path: "/cadastro", element: <Cadastro /> },
  LOGIN: { nome: "Login", path: "/login", element: <Login /> },
};

export default ROTAS;
