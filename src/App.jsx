import "./tailwind.css";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () =>{
    return(
        <div className="App">
            <Navbar/>
            <main className="container mx-auto">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}
export default App