import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import SearchBar from './components/Searchbar';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />}/>
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />}/>
            <Route path='/products/:productId' element={<Product />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<PlaceOrder />}/>
            <Route path='/orders' element={<Orders />}
            />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
