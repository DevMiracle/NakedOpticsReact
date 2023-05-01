import './StoriesPart.scss'

export const StoriesPart = () => {
  return (
    <div className='stories-container'>
      <div className="stories-header">
        <h1>STORIES</h1>
        <a href="#">Discover all our stories<span>&gt;</span></a>
      </div>
      <div className="stories">
        <div className="stories-item1">
          <p>The perfect running training: Some advice for beginners</p>
        </div>
        <div className="stories-item2">
          <p>What are the differences between the lenses?</p>
        </div>
        <div className="stories-item3">
          <p>What is important in sports glasses?</p>
        </div>
        <div className="stories-item4">
          <p>Back to the roots - Back in Salzburg</p>
        </div>
      </div>
    </div>
  );
}
