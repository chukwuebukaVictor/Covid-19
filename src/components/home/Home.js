// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { AiOutlineSetting } from 'react-icons/ai';
// import { FaMicrophone } from 'react-icons/fa';
// import { BsArrowRightCircle } from 'react-icons/bs';
// import { Link } from 'react-router-dom'
// import './home.css'
// import RenderData from '../renderData/RenderData';

  
// function Home() {
//   const countries = useSelector((state) => state);
//   const [searchItem, setSearchItem] = useState('');
//   const loadingStatus = countries.loading;
//   return (
//     <>
//     <div className="d-flex nav">
//         <h2 className="header">African countries covid cases</h2>
//         <div className="icon">
//           <AiOutlineSetting />
//           <FaMicrophone />
//         </div>
//       </div>
//     <div className="main">
//       <div className="search">
//       <h3>Search</h3>
//       <input type="text" value={searchItem}
//         onChange={(e) => setSearchItem(e.target.value)}
//         placeholder="Search Country" />
//       </div>
//       <div className="country_link_container">
//         {loadingStatus === false
//           ? countries.data
//             .filter(
//               (country) => country.CountryName.toLowerCase().includes(searchItem.toLowerCase()),
//             )
//             .map(
//               (country) => (
//                 <>
//                   <RenderData
//                     country={country.CountryName}
//                     key={country.ID}
//                     total={country.TotalConfirmed}
//                   />
//                 </>
//               ),
//             ) : <h1>***Loading***</h1>}
//       </div>
//       <div className="d-grid a-countries">
//       <Link to="details">
//         <div className="one-country">
//           <h1><BsArrowRightCircle /></h1>
//           <div className="country">Country1</div>
//         </div>
//       </Link>
//       <Link to="details">
//         <div className="one-country">
//           <h1><BsArrowRightCircle /></h1>
//           <div className="country">Country2</div>
//         </div>
//       </Link>  
//         <div>
//           <h1><BsArrowRightCircle /></h1>
//           <div className="country">Country3</div>
//         </div>
//         <div>
//           <h1><BsArrowRightCircle /></h1>
//           <div className="country">Country4</div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Home

import { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderData from '../renderData/RenderData';

const searchDisplayStyle = {
  marginBottom: '1rem',
  fontSize: '2rem',
};

const Home = () => {
  const countries = useSelector((state) => state);
  console.log(countries);
  const [searchItem, setSearchItem] = useState('');
  const loadingStatus = countries.loading;
  return (
    <div>
      <div className="nav_bar">
        <span className="nav_header">Top 20 African countries COVID cases</span>
        <i className="fa fa-microphone microphone_button" aria-hidden="true" />
        <i className="fa fa-gear nav_buttons" aria-hidden="true" />
      </div>
      <div className="image_wrapper">
        <div className="image_container" />
      </div>
      <p className="search_item_container">
        <div style={searchDisplayStyle}>Search</div>
        <div>
          <input
            value={searchItem}
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search by country"
          />
        </div>
      </p>
      <div className="country_link_container">
        {loadingStatus === false
          ? countries.data
            .filter(
              (country) => country.CountryName.toLowerCase().includes(searchItem.toLowerCase()),
            )
            .map(
              (country) => (
                <>
                  <RenderData
                    country={country.CountryName}
                    key={country.ID}
                    total={country.TotalConfirmed}
                  />
                </>
              ),
            ) : <h1>***Loading***</h1>}
      </div>
    </div>
  );
};

export default Home;