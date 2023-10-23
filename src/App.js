import {Routes,Route, BrowserRouter} from "react-router-dom"
import './app.css'
// import { useEffect } from "react";
import  Navbar from "./components/navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Services from "./pages/services"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
