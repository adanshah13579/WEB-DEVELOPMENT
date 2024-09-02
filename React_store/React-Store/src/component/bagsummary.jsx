import { useSelector } from "react-redux"

const Bagsummary=()=>{

  const bagids =useSelector((store)=>store.bagitm)
  const itm=useSelector((store)=>store.item)

  const bagitm= itm.filter(itmm=>{
    const itemindex=bagids.indexOf(itmm.id);
    return itemindex>=0
  }) 
  const Conveniencefees=99
   let totalItem=bagids.length;
   let totalMRP=0
   let totalDiscount=0
   

   bagitm.forEach((bi)=>{

    totalMRP+=bi.original_price;
    totalDiscount += bi.original_price-bi.current_price;
   })
  

    let finalPayment= totalMRP-totalDiscount+Conveniencefees
  

return(

  <>
  <div className="bag-summary">
  <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS{ totalItem} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">Rs{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-Rs{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">Rs99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">Rs{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  
  </>
)



}

export default Bagsummary