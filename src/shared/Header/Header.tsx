import './Header.scss';
import mainLogo from './HeaderAssets/Logo.svg';
import mobileLogo from './HeaderAssets/Mobile-Logo.svg'
import searchIcon from './HeaderAssets/Search-Vector.svg'
import profileIcon from './HeaderAssets/Profile-Vector.svg'
import cartIcon from './HeaderAssets/Cart-Vector.svg'
import burgerIcon from './HeaderAssets/Burger.svg'


export const Header = () => {
  return (
 <div className="menu">
    <div id="burger-menu">
      <button><img src={burgerIcon} alt="" /></button>
    </div>
    <div id="burger-menu-list">
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
  )
}

export default Header 