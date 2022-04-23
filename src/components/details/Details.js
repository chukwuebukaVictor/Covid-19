// // import React from 'react';
// // import { AiOutlineSetting } from 'react-icons/ai';
// // import { FaMicrophone } from 'react-icons/fa';
// // import { MdArrowBackIosNew } from 'react-icons/md';
// // import { Link } from 'react-router-dom'
// // import './details.css'

// // function Details() {
// //   return (
// //     <div>
// //       <div className="d-flex nav">
// //         <div className="nav1">
// //        <Link to="/"><MdArrowBackIosNew className="back-icon"/></Link>
// //         <h2 className="header">COVID cases per country</h2>
// //         </div>
// //         <div className="icon">
// //           <AiOutlineSetting />
// //           <FaMicrophone />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Details

// // import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const Details = () => {
//   const params = useParams();
//   console.log(params);
//   const { country } = params;
//   // console.log(country);
//   const countries = useSelector((state) => state);
//   // console.log(countries);
//   // console.log(result.data);
//   // const countries = result.data
//   let covidData = [];

//    if (countries.data !== undefined){
//      covidData = countries.data.filter((result)=> result.CountryName === country)
//      console.log(covidData);
//    }
//   // const countryFlag = `https://countryflagsapi.com/png/${country}`;
//   //   return(
//   //     <>
//   //       <div className="nav_bar">
//   //       <Link to="/"><i className="fa fa-angle-left nav_buttons" aria-hidden="true" /></Link>
//   //       <span className="nav_header">COVID cases per country</span>
//   //       <i className="fa fa-microphone microphone_button" aria-hidden="true" />
//   //       <i className="fa fa-gear nav_buttons" aria-hidden="true" />
//   //     </div>
      
//   //     </>
//   //   )

// }

// export default Details;
  
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
 import { FaMicrophone } from 'react-icons/fa';
import { MdArrowBackIosNew } from 'react-icons/md';
import './details.css'


const Details = () => {
  const params = useParams();
  const { country } = params;
  const countries = useSelector((state) => state);
  let covidData = [];
  if (countries !== undefined) {
    covidData = countries.data.filter((data) => data.CountryName === country);
    console.log(covidData)
  }
  const countryFlag = `https://countryflagsapi.com/png/${country}`;

  return (
    <>
    {/* <div className="nav_bar">
        <span className="nav_header">COVID cases data</span>
        <div>
        <AiOutlineSetting className="header-icon" />
         <FaMicrophone className="header-icon" />

        </div> */}
      <div className="nav_bar">
        <div className="nav-details">
        <Link to={`/`}><MdArrowBackIosNew  className="header-icon" /></Link>
        <h2 className="nav-header">COVID cases data</h2>
        </div>
        <div>
        <AiOutlineSetting className="header-icon" />
          <FaMicrophone className="header-icon" />
        </div>
      </div>
      <div className="details_container">
        <div>
          <h1 className="description_header">{`${country}'s Covid Data`}</h1>
        </div>
        <img className="country_flag" src={countryFlag} alt="country flag" />
        <div>
          {countries !== undefined
            ? (
              <div className="description_container">
                <span className="description">
                  Country:&nbsp;&nbsp;
                  {covidData[0].CountryName}
                </span>
                <span className="description">
                  Date:&nbsp;&nbsp;
                  {covidData[0].Date}
                </span>
                <span className="description">
                  Total Confirmed Cases:&nbsp;&nbsp;
                  {covidData[0].TotalConfirmed}
                </span>
                <span className="description">
                  New Confirmed Cases:&nbsp;&nbsp;
                  {covidData[0].NewConfirmed}
                </span>
                <span className="description">
                  New Recovered:&nbsp;&nbsp;
                  {covidData[0].NewRecovered}
                </span>
                <span className="description">
                  Total Deaths:&nbsp;&nbsp;
                  {covidData[0].TotalDeath}
                </span>
                <span className="description">
                  New Deaths:&nbsp;&nbsp;
                  {covidData[0].NewDeath}
                </span>
              </div>
            ) : <h1>***Loading***</h1>}
        </div>
      </div>
    </>
  );
};

export default Details;