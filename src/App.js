// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/home/Home';
// import Details from './components/details/Details'
// import './App.css'
// import { fetchCountriesData } from './Redux/covidData/countriesCovidData';
// // import Nav from './components/nav/Nav';

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchCountriesData());
//   }, []);
  
//   return (
//     <>
//       <div>
//         <div className="container">
//           <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/details:country" element={<Details />} />
//           </Routes>
//           </Router>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchCountriesData } from './Redux/covidData/countriesCovidData';
import HomePage from './components/home/Home';
import Details from './components/details/Details'
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
    // fetchCountriesData()
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/details/:country" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;