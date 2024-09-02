import {Link} from 'react-router-dom'
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Header = () => {

  const bag=useSelector(store=>store.bagitm)

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/adan.jpg"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon"></span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
          <IoMdPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
          <FaHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/Bag">
          <BsBagFill />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
