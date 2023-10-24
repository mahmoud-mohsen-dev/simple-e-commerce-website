import './App.css';
import data from './db/data';
import Nav from './navbar/Nav.js'
import Recommended from './Recommended/Recommended.js'
import Products from './Products/Products';


function App() {
  return (
    <div className="App">
      <Nav />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
