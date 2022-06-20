import "./App.css";
import Rotas from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";

import { ToastContainer} from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Rotas />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
