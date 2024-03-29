import Home from "./pages/Home";
import OnBoarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App =()=> {
  return (
   <BrowserRouter>
     <Routes>
       
       <Route path={"/"} element={<Home/>}/>
       <Route path={"/dashboard"} element={<Dashboard/>}/>
       <Route path={"/onboarding"} element={<OnBoarding/>}/>

     </Routes>
   </BrowserRouter>
  )
}

export default App;
