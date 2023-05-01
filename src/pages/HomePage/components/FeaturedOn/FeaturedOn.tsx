import './FeaturedOn.scss'
import mountainBike from './assets/mountain-bike.svg'
import primeSkiing from './assets/prime-skiing.png'
import bild from './assets/bild.svg'
import bikeFreeride from './assets/bike-freeride.png'
import roadCyclingDE from './assets/road-cycling-de.svg'
import snowBoarding from './assets/snow-boarding.svg'

export const FeaturedOn = () => {
  return (
    <div className="featured-container">
      <h1>FEATURED ON</h1>
      <div className="featured-items">
        <img src={mountainBike} alt="" />
        <img src={primeSkiing} alt="Skiing-logo" />
        <img src={bild} alt="" />
        <img src={bikeFreeride} alt="FreeRide-logo" />
        <img src={roadCyclingDE} alt="" />
        <img src={snowBoarding} alt="" />
      </div>
    </div>
  );
};
