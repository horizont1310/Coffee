import './App.scss';

import Promo from '../promo/promo';
import About from '../about-us/about';
import OurBest from '../our-best/our_best';
import Footer from '../footer/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Promo/>
      </header>

      <div className="about_us">
        <About className='first'/>
      </div>

      <div className="our_best">
        <OurBest />
      </div>

      <div className="footer">
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
