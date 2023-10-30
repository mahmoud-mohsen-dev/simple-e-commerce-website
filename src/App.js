import './App.css';
import data from './db/data';
import Nav from './navbar/Nav.js'
import Recommended from './Recommended/Recommended.js'
import Products from './Products/Products';
import Sidebar from './sidebar/Sidebar';
import { useState } from 'react';


function App() {
  const [theData, setTheData] = useState(data)

  return (
    <div className="App">
      <Nav theFunc={setTheData} initialData={data} />
      <Sidebar theFunc={setTheData} initialData={data} />
      {/* you have to call a func and change the state and pass it to the child components*/}
      <Recommended theFunc={setTheData} initialData={data} />
      <Products theData={theData} />
    </div>
  );
}

export default App;
