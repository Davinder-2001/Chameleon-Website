import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUS from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import OurServices from './pages/OurServices/OurServices';
import Portfolio from './pages/Portfolio/Portfolio';
import Resources from './pages/Resources/Resources';
import Navbar from './components/navbar/Navbar';
import BlogDescription from './pages/Blog/Components/BlogDescription'
import "./index.css"



function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/resources" element={<Resources/>}/>
      <Route path ="/blog" element={<Blog/>}/>
      <Route path ="/services" element={<OurServices/>}/>
      <Route path ="/portfolio" element={<Portfolio/>}/>
      <Route path ="/aboutus" element={<AboutUS/>}/>
      <Route path ="/login" element={<Login/>}/>
      
      <Route path ="/blogdescription" element={<BlogDescription/>}/>
    </Routes> 
   </div>
  )
}

export default App
