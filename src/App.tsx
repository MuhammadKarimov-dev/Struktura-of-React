import { Route, Routes } from "react-router-dom"

import "./styles/global.scss"
import { routes } from "./routes"; 
import Layout from "./Layout/Layout";



const App = () => {
  return (
    <div>


      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
        
    </div>
  )
}

export default App