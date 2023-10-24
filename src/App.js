import './App.css';
import data from './db/data';
import Nav from './navbar/Nav.js'
import Recommended from './Recommended/Recommended.js'
// import Category from './sidebar/category/Category.js'
// import Color from './sidebar/category/Category.js'
// import Category from './sidebar/category/Category.js'



function App() {
  return (
    <div className="App">
      <Nav />
      <Recommended />
    </div>
  );
}

export default App;
