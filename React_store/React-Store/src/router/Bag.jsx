import { useSelector } from "react-redux"
import Bagitems from "../component/bagitems"
import Bagsummary from "../component/bagsummary"
const Bag =()=>{

  

  const bagids =useSelector((store)=>store.bagitm)
  const itm=useSelector((store)=>store.item)

  const bagitm= itm.filter(itmm=>{
    const itemindex=bagids.indexOf(itmm.id);
    return itemindex>=0
  }) 


return(
  <>
 
    <main>
      <div className="bag-page">

        {bagitm.map((item)=> ( <Bagitems key={item}  item={item}></Bagitems>))}
        
          
        
        <Bagsummary></Bagsummary>

      </div>
    </main>
   
    </>
    )


}
export default Bag