import { useSelector } from "react-redux"
import Homeitem from "../component/homeitem"



const Home=()=>{
  const itm =useSelector((store)=>store.item)
   
return(

  <main>
  <div className="items-container">
    {itm.map((item)=><Homeitem key={item.id} item={item}/>)}
  </div>
</main>
)




}

export default Home