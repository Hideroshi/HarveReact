import './App.css';

import { ComponenteDados } from './componentes/ComponenteDados';
import { ComponenteResumoSobreVoce } from './componentes/ComponenteResumoSobreVoce';
import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';
import { RouteApp } from './routes';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouteApp />
    </>
  );
}

export default App;

// <div className="App">
// <p>Importando Componentes</p>
// <hr />
// <ComponenteDados 
//   nome="Aurelio"
//   idade="33"
//   telefone="(41)98845-8528"
// />
// <ComponenteResumoSobreVoce>
//   Moro em Curitiba, trabalho na area de TI, e sou desenvolvedor FrontEnd!
// </ComponenteResumoSobreVoce>
// <hr />
// <p>Lista de Competencias</p>

// <ComponenteCompetencia
//   nome="HTML"
//   descricao="Fazer pagina static para o curso realizado na Harve"
// />
// <ComponenteCompetencia
//   nome="CSS"
//   descricao="Para complementar o curso de HTML da Harve"
// />
// </div>
