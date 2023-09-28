import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
// import Contact from './Contact'
import Contact from './Contact'




export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home q="All" />} />
                    <Route path="/about" element={<About q="About" />} />
                    <Route path="/product-1" element={<Home q="Porduct 1" />} />
                    <Route path="/product-2" element={<Home q="Product 2" />} />
                    <Route path="/product-3" element={<Home q="Product 3" />} />
                    <Route path="/product-4" element={<Home q="Product 4" />} />
                    <Route path="/contact" element={<Contact q="Contact" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}





