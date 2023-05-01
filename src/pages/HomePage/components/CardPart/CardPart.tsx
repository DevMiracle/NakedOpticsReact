import './CardPart.scss'
import cardFront1 from './assets/card1-front.svg'
import cardFront2 from './assets/card2-front.svg'
import cardFront3 from './assets/card3-front.svg'

export const CardPart = () => {
    return (
    <div className="cards">
      <div className="card1">
        <h3>STEFAN MULLER CHOICE</h3>
        <h6>Bike glasses</h6>
        <h2>THE FALCON</h2>
        <p>
          Resistant and flexible TR-90 Frame, adjustable sylicon nose pads,
          interchangeble lenses 5+different lenses
        </p>
        <span> 74,99 € </span>
        <div className="card1-front">
          <img src="Card/card1-front.svg" alt="" />
        </div>
      </div>
      <div className="card2">
        <h3>CHLOE KELLERMAN</h3>
        <h6>SNOW GOGGLES</h6>
        <h2>FORCE EVO</h2>
        <p>
          Resistant and flexible TR-90 Frame, adjustable sylicon nose pads,
          interchangeble lenses 5+different lenses
        </p>
        <span> 74,99 € </span>
        <div className="card2-front">
          <img src="Card/card2-front.svg" alt="" />
        </div>
      </div>
      <div className="card3">
        <h3>ADRIEN BRODLEY</h3>
        <h6>Bike glasses</h6>
        <h2>THE LINE</h2>
        <p>
          Resistant and flexible TR-90 Frame, adjustable sylicon nose pads,
          interchangeble lenses 5+different lenses
        </p>
        <span> 74,99 € </span>
        <div className="card3-front">
          <img src="Card/card3-front.svg" alt="" />
        </div>
      </div>
    </div>
    );
}