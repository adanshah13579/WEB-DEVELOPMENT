


import Header from '../component/header'
import Footer from '../component/footer'
import Homeitem from '../component/homeitem'
import { Outlet } from 'react-router-dom'
import Fettch from '../component/fetch'
import { useSelector } from 'react-redux'
import Load from '../component/loader'



function App() {

  const fetchh =useSelector((store)=>store.fettch)
  

  
  return (
    <>
       <Header></Header>
       <Fettch></Fettch>
    
    {fetchh.cuurentfetching?<Load></Load>: <Outlet></Outlet>}
    <Footer></Footer>
    </>
  )
}

export default App
