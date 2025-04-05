import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Project from "./pages/Project";
import Blogdetails from "./pages/Blogdetails";
import Projectdetails from "./pages/Projectdetails";


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
    <Route path="/pages/blog/:id" element={<Blogdetails/>} />
    <Route path="/pages/project" element={<Project/>} />
    <Route path="/pages/project/:id" element={<Projectdetails/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}
