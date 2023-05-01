import './Header.scss';
import mainLogo from './assets/Logo.svg';
import mobileLogo from './assets/Mobile-Logo.svg'
import searchIcon from './assets/Search-Vector.svg'
import profileIcon from './assets/Profile-Vector.svg'
import cartIcon from './assets/Cart-Vector.svg'
import burgerIcon from './assets/Burger.svg'
import { useState } from 'react';

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
          <li><a href="#">profile</a></li>
        </ul>
      </div>
      <div className="logo">
        <img src= {mainLogo} alt="" className="full-logo" />
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
        <a href="#" className="profile"><img src={profileIcon} alt="" /></a>
        <div className="cart">
          <a href="#"><img src={cartIcon} alt="Cart icon" /></a>
          <span className="cart-count">4</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
