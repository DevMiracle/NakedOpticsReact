import './Header.scss';
import mainLogo from './assets/Logo.svg';
import mobileLogo from './assets/Mobile-Logo.svg'
import searchIcon from './assets/Search-Vector.svg'
import profileIcon from './assets/Profile-Vector.svg'
import cartIcon from './assets/Cart-Vector.svg'
import burgerIcon from './assets/Burger.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="menu">
      <div id="burger-menu" onClick={handleBurgerClick}>
        <button><img src={burgerIcon} alt="" /></button>
      </div>
      <div id="burger-menu-list" className={isMenuOpen ? 'overlay' : ''}>
        <ul>
          <li><a href="#">optics</a></li>
          <li><a href="#">clothing</a></li>
          <li><a className="outlet-color" href="#">outlet</a></li>
          <li><a href="#">naked heroes</a></li>
          <li><a href="#">stories</a></li>
          <li><Link to="login">profile</Link></li>
        </ul>
      </div>
      <div className="logo">
        <Link to={"/"}> <img src= {mainLogo} alt="" className="full-logo" /></Link>
        <img src={mobileLogo} alt="" className="mobile-logo" />
      </div>
      <nav>
        <a href="#">optics</a>
        <a href="#">clothing</a>
        <a className="outlet-color" href="#">outlet</a>
        <a href="#">naked heroes</a>
        <a href="#">stories</a>
      </nav>
      <div className="shopping">
        <a href="#"><img src= {searchIcon} alt="" /></a>
        <Link to="/login" className="profile"><img src={profileIcon} alt="" /></Link>
        <div className="cart">
          <a href="#"><img src={cartIcon} alt="Cart icon" /></a>
          <span className="cart-count">4</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
