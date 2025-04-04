import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Project from "./pages/Project";


export default function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/pages/blog" element={<Blog/>} />
    <Route path="/pages/project" element={<Project/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}
