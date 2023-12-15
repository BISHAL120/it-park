import './App.css';
import Article from './pages/Home/Article/Article';
import Artists from './pages/Home/Artists/Artists';
import Assistance from './pages/Home/Assistance/Assistance';
import Banner from './pages/Home/Banner/Banner';
import Poster1 from './pages/Home/Poster1/Poster1';
import Poster2 from './pages/Home/Poster2/Poster2';
import Social from './pages/Home/Social/Social';
import Sports from './pages/Home/Sports/Sports';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Article />
      <Social />
      <Artists />
      <Poster1 />
      <Poster2 />
      <Sports />
      <Assistance />
    </div>
  );
}

export default App;
