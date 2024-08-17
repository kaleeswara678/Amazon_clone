import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart } from '@mui/icons-material';


const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header_searchIcon'/>
      </div>

      <nav className="header__nav">
        <Link to="/signin">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/prime">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__basketIconContainer">
            <ShoppingCart/>
            <span className="header__basketCount">0</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
