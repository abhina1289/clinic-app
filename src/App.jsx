
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Aboutus from './pages/Aboutus'
import Home from './pages/Home'
import Services from './pages/Services'
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='abt' element={<Aboutus />} />
       <Route path='service' element={<Services />} />
       <Route path='review' element={<Review/>} />
       <Route path='contactus' element={<ContactUs/>} />
       <Route path='' element={<ContactUs/>} />


       {/* <Route path='/' element={<Home />} /> */}
    </Routes>
    <Footer/>

    </>
  )
}

export default App
