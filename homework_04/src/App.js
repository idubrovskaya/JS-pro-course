import './App.css';
import Converter from './Components/Converter/Converter';
import Facebook from './Components/Facebook/Facebook';
import Onliner from './Components/Onliner/Onliner';
import Posts from './Components/Posts/Posts';
import Time from './Components/Time/Time';

function App() {
  return (
    <div className='App'>
      <Posts />
      <Facebook />
      <Onliner />
      <Time />
      <Converter />
    </div>
  );
}

export default App;
