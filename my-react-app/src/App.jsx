import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyles } from "./style/GlobalStyles"
import { ToastContainer } from 'react-toastify'

function App() {

  return (
  <>
      <GlobalStyles />
      <RoutesMain />
      <ToastContainer position="top-right"
                                  autoClose={1000}
                                  hideProgressBar
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="dark"/>
  </>
  )
}

export default App
