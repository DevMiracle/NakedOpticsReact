import './DoubleProductHero.scss'
import largeGlasses from './assets/large-glasses.svg'
import smallGlasses from './assets/small-glasses.svg'

export const DoubleProductHero = () => {
    return (
    <div className="double-product-container">
      <div className="double-product-hero">
        <h3>Falcon & Hawk</h3>
        <h1>THE SIZE MATTERS</h1>
        <p className="double-product-paragraph">
          We developed the falcon for big faces and the hawk for smaller ones so
          it can fit your needs for the best performance without compromise
        </p>
        <div className="buttons-box">
          <div className="button">
            <p>Size L</p>
            <button>SHOP FALCON<span>&gt;</span></button>
          </div>
          <div className="button">
            <p>Size S</p>
            <button>SHOP HAWK<span>&gt;</span></button>
          </div>
        </div>
        <div className="glasses">
          <div className="big-glass">
            <img src={largeGlasses} alt="" />
          </div>
          <div className="small-glass">
            <img src={smallGlasses} alt="" />
          </div>
        </div>
      </div>
    </div>
    );
}