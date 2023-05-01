import './NewsLetter.scss';

export const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter">
        <div className="newsletter-text">
          <p>JOIN OUR NEWSLETTER</p>
          <h1>
            Enter your e-mail and don’t miss any news or promotion from NAKED
            Optics
          </h1>
        </div>
        <div className="newsletter-email">
          <form>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Add your email"
              />
            </label>
            <button type="submit">
              Send<span>&gt;</span>
            </button>
          </form>
          <label className="label-checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="privacy-policy"
              required
            />
            I accept the <a href="#">privacy policy</a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter