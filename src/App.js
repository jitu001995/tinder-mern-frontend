
import './App.css';
import Header from './Component/Header';
import SwipeButtons from './Component/SwipeButtons';
import TinderCards from './Component/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards/>
      <SwipeButtons />
    </div>
  );
}

export default App;
