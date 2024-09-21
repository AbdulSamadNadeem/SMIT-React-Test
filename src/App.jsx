import { Route, Routes } from "react-router"
import Card from "./Components/Cards/Cards"
import Error from "./pages/error"
import Page from "./pages/Page"

function App() {
 

  return (
    <>
          <Routes>
             
            <Route path="/" element={<Card/>}></Route>
            <Route path="/cards" element={<Card/>}></Route>
            <Route path="/details/:id" element={<Page/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Routes> 
      
    </>
  )
}

export default App
