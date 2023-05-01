import './Footer.scss'
import instagramIcon from './assets/InstagramIcon.svg'
import youtubeIcon from'./assets/YoutubeIcon.svg'
import facebookIcon from'./assets/FacebookIcon.svg'
import secureShoppingIcon from'./assets/SecureShoppingIcon.svg'

const Footer = () => {
    return (
    <footer>
      <div className="container">
        <div className="box">
          <h3>Our Story</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Sponsoring</a></li>
          </ul>
        </div>
        <div className="box">
          <h3>Support</h3>
          <ul>
            {/*    The &gt; entities is used to display ">" symbol    */}
            <li><a id="GetSupColor" href="#">Get Support <span>&gt;</span></a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Student Discount</a></li>
            <li><a href="#">Legal Notice</a></li>
          </ul>
        </div>
        <div className="box">
          <h3>Social</h3>
          <ul className="social-icons">
            <li>
              <a href="#"><img src={youtubeIcon} alt="" /></a>
            </li>
            <li>
              <a href="#"><img src={facebookIcon} alt="" /></a>
            </li>
            <li>
              <a href="#"><img src={instagramIcon} alt="" /></a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h3>Our Payment Methods</h3>
          <div className="payment-methods">
            <div className="visa">
              <img src="Payment-Vectors/Visa.svg" alt="Visa" />
            </div>
            <div className="mastercard">
              <img src="Payment-Vectors/Mastercard.svg" alt="Mastercard" />
            </div>
            <div className="mastercard-red">
              <img src="Payment-Vectors/Maestro.svg" alt="Mastercard Red" />
            </div>
            <div className="diners-club">
              <img src="Payment-Vectors/Diners Club.svg" alt="Diners Club" />
            </div>
            <div className="stripe">
              <img src="Payment-Vectors/Stripe.svg" alt="Stripe" />
            </div>
          </div>
        </div>
        <div className="box">
          <h3>Secure Shopping</h3>
          <div className="secure-shopping">
            <img src={secureShoppingIcon} alt="Secure Shopping" />
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer