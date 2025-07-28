import "./Header.css";
import amazonlogo from "./../assets/White-Amazon-Logo-PNG-HD-Quality.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../store/basketSlice";


function Header() {
  
  const basket = useSelector(selectBasketItems);

  return (
    <div className="header">
      <div className="header__left">
        <img
          src={amazonlogo}
          alt="Amazon Logo"
          className="header__logo"
          onClick={() => navigate("/")}
        />
        <div className="header__option header__location">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo">Miran Sahib</span>
        </div>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Amazon.in"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div
          className="header__optionBasket"
          
        >
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length || 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
