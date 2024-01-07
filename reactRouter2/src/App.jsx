import { BrowserRouter, Routes, Route } from'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Posts from './components/Posts/Posts'
import Error from './components/Error/Error'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='about' element={ <About /> } />
        <Route path='products' element={ <Products /> } />
        <Route path='products/:productId' element={ <SingleProduct /> } />
        <Route path='posts' element={ <Posts /> } />
        <Route path='*' element={ <Error /> } />

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
