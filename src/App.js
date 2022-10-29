import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container_main">
        <div className='banner_container'>
          <span className='text_container'>
          <h1>Freedom to be yourself</h1>
          <p>Search, shop or rent your favourite designer brands</p>
          <span className='search_wrapper'>
            <input className='text_input' placeholder='Search by product or brand'/> <button className="btn ml-16">Search</button>
          </span>
          </span>
        </div>
      </div>
      <div className='grid_container'>
        <h1>Who choose ruby?</h1>
        <span className='grid_wrap'>

        <div className='grid_item'>
          <picture>
            <img className='image' src="https://image.shutterstock.com/image-illustration/realistic-package-cardboard-sliding-open-600w-633981065.jpg"/>
          </picture>
          <p>Experiment with your style</p>
          <p>Experiment with your personal style without the burden of ownership. Your personal style is always evolving, so why shouldn’t your wardrobe be too?</p>
        </div>
        <div className='grid_item'>
          <picture>
            <img className='image' src="https://image.shutterstock.com/image-illustration/realistic-package-cardboard-sliding-open-600w-633981065.jpg"/>
          </picture>
          <p>Fit guarantee</p>
          <p>If the dress doesn’t fit or you’re just not happy with it - simply send your dress back with all tags fully intact, and we’ll provide you a refund or an exchange.</p>
        </div>
        <div className='grid_item'>
          <picture>
            <img className='image' src="https://image.shutterstock.com/image-illustration/realistic-package-cardboard-sliding-open-600w-633981065.jpg"/>
          </picture>
          <p>Save wardrobe space</p>
          <p>Our customers report a significant reduction in the build up of unused clothing in their wardrobes.</p>
        </div>
        <div className='grid_item'>
          <picture>
            <img className='image' src="https://image.shutterstock.com/image-illustration/realistic-package-cardboard-sliding-open-600w-633981065.jpg"/>
          </picture>
          <p>Wear more and spend less</p>
          <p>Get that new clothes feeling without the buyer's remorse and get access to over 2,000 designer styles. We take care of the cleaning.</p>
        </div>
        </span>
      </div>

    </div>
  );
}

export default App;
