import { useDispatch, useSelector } from "react-redux";
import { bagaction } from "../../store/bagslice";

const Homeitem = ({ item }) => {
  const dispatch = useDispatch();
  const b = useSelector((store) => store.bagitm);
  const itemfound = b.indexOf(item.id) >= 0;

  const handelbag = () => {
    dispatch(bagaction.Addtobag(item.id));
  };
  const handelremovee = () => {
    dispatch(bagaction.RemovefromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {itemfound ? (
          <button  type="button" className="btn-add-bag" onClick={handelremovee}>
            Remove
          </button>
        ) : (
          <button className="btn-add-bag" onClick={handelbag}>
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default Homeitem;
