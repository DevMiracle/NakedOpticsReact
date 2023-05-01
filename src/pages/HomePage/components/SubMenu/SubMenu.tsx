import "./SubMenu.scss";
import subMenuProduct1 from "./assets/1st.svg";
import subMenuProduct2 from "./assets/2nd.svg";
import subMenuProduct3 from "./assets/3rd.svg";
import subMenuProduct4 from "./assets/4th.svg";
import subMenuProduct5 from "./assets/5th.svg";
import subMenuProduct6 from "./assets/6th.svg";
import subMenuProduct7 from "./assets/7th.svg";

export const SubMenu = () => {
  return (
    <div className="sub-menu">
      <div className="frame">
        <img src={subMenuProduct1} alt="" />
        <a href="#">Sun glasses</a>
      </div>
      <div className="frame">
        <img src={subMenuProduct2} alt="" />
        <a href="#">Sport glasses</a>
      </div>
      <div className="frame">
        <img src={subMenuProduct3} alt="" />
        <a href="#">Bycicle glasses</a>
      </div>
      <div className="frame">
        <img src={subMenuProduct4} alt="" />
        <a href="#">Ski goggles</a>
      </div>
      <div className="frame">
        <img src={subMenuProduct5} alt="" />
        <a href="#">Bike Goggles</a>
      </div>
      <div className="frame">
        <img src={subMenuProduct6} alt="" />
        <a href="#">Lenses</a>
      </div>
      <div className="frame">
        <img src={subMenuProduct7} alt="" />
        <a href="#">Accesories</a>
      </div>
    </div>
  );
};
