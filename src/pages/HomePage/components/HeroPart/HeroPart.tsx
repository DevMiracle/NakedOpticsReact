import './HeroPart.scss';
import heroImg from './assets/Hero-img.png'
import heroMobile from './assets/hero-img-mobile.svg'
import heroMobileBottom from './assets/Hero-mobile-black-part.svg'

export const HeroPart = () => {
  return (
    <div className="hero">
      <div className="box">
        <p>THE NEW</p>
        <h1>FORCE EVO</h1>
        <a href="#">For the toughest situation</a>
        <h3>79,99 €</h3>
        <button>
          Buy Now <span>&gt;</span>
        </button>

        <div className="lines">
          <div className="line1">
            <div className="line1-blue"></div>
            blue
          </div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
};
