import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Project from "./pages/project/Project";
import Blogdetails from "./pages/blog/Blogdetails";
import Projectdetails from "./pages/Project/Projectdetails";
import About from "./pages/about/About";


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
