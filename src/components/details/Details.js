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
  
