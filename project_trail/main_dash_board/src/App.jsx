import { useState } from 'react'


import './index.css'
import './App.css'

import Navbar from './component/Navbar.jsx'
import HomePage from './component/HomePage.jsx'
import Service from './component/Service.jsx'
import About from './component/About.jsx'
import Products from './component/Products.jsx'
import Blogs from './component/Blogs.jsx'
import Newsletter from './component/Newsletter.jsx'
import Myfooter from './component/Myfooter.jsx'

function App() {
 

  return (
   <>
   <Navbar/>
   <HomePage/>
   <Service/>
   <About/>
   <Products/>
   <Blogs/>
   <Newsletter/>
   <Myfooter/>
   </>
  )
}

export default App
