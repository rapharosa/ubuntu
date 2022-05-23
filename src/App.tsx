import Pagina from "./componentes/pagina/Pagina";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
