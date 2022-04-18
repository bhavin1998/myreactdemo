// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Texttransform from './components/Texttransform';

function App() {
 
  return (
    <>
      <Navbar sitetitle="First app" abouttextt="About Us" />
      <div>
      <Texttransform headingtext="This is Demo task"/>
      </div>

    </>
  );
}

export default App;
