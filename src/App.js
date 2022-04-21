import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details'
import './App.css'
import Nav from './components/nav/Nav';

function App() {
  
  return (
    <>
      <div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
