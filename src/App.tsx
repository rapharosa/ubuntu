import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter basename="/ubuntu">
      <div className="App">
        <AppRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
