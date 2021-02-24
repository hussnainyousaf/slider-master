import './reset.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/index'
import original1 from './img/s1.jpg';
import modified1 from './img/s2.jpg';
import Slider from './components/Slider';
import HowItWorks from './components/HowItWorks/index'
import WaterFall from './components/WaterFallFee/index'
import Exampledeliverables from './components/ExampleDeliverables/index'
import imageData from './components/ExampleDeliverables/imagedata'
import TruePlan from './components/TruePlan/index'
const slider2 = {
  original: {
      url: original1,   
  },
  modified: {
      url: modified1,
  }
};

function App() {
  return (
    <Router>
    <Home/>
    <div className="container">
  
    <Slider {...slider2}/>
    <button className='bttn'>Try Today</button>
  
    </div>
    <HowItWorks/>
    <WaterFall/>
    <Exampledeliverables slides={imageData}/>
    <TruePlan/>
    </Router>
   
  );
 
}

export default App;
