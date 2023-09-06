import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import Global from './contexts/Global';



const App = () => {
  const routing = useRoutes(Themeroutes);
  

  return (
    <Global.Provider>
        <div className="dark">{routing}</div>
    </Global.Provider>
  )
};

export default App;
