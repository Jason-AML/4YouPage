import { Routers } from "./rutas/Routers";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Routers />
      <ToastContainer position="top-right" autoClose={3000} />;
    </>
  );
}

export default App;
