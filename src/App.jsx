import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Blogdetails from "./pages/blog/Blogdetails";
import Projectdetails from "./pages/project/Projectdetails";
import About from "./pages/about/About";
import NotFound from "./components/NotFound";
import Project from "./pages/project/Project";
import Gallery from "./pages/galley/Gallery";
import Home from "./pages/home/Home";
import {ToastContainer} from 'react-toastify';


export default function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    {/* /about ayo vane about page dekhako xa right? yes */}
    <Route path="/about" element={<About/>} />
    {/* / paxi junai path ayeni tyo path vetena vane yo notfound component dekhiney vayo hai tw lets see it works or not?oka? okay */}
    <Route path="/contact" element={<Contact/>} />
    <Route path="/pages/blog" element={<Blog/>} />
    <Route path="/pages/blog/:id" element={<Blogdetails/>} />
    <Route path="/pages/project" element={<Project/>} />
    <Route path="/pages/project/:id" element={<Projectdetails/>} />
    <Route path="/*" element={<NotFound text="Page Not Found"/>} />
    <Route path="/gallery" element={<Gallery/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   <ToastContainer  
   position="top-center"
   autoClose={2000} />
   </>
  );
}
