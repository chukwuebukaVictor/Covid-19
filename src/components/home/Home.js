import { AiOutlineSetting } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <>
    <div className="d-flex nav">
        <h2 className="header">African countries covid cases</h2>
        <div className="icon">
          <AiOutlineSetting />
          <FaMicrophone />
        </div>
      </div>
    <div className="main">
      <div className="search">
      <h3>Search</h3>
      <input type="text" placeholder="Search Country" />
      </div>
      <div className="d-grid a-countries">
      <Link to="details">
        <div className="one-country">
          <h1><BsArrowRightCircle /></h1>
          <div className="country">Country1</div>
        </div>
      </Link>
      <Link to="details">
        <div className="one-country">
          <h1><BsArrowRightCircle /></h1>
          <div className="country">Country2</div>
        </div>
      </Link>  
        <div>
          <h1><BsArrowRightCircle /></h1>
          <div className="country">Country3</div>
        </div>
        <div>
          <h1><BsArrowRightCircle /></h1>
          <div className="country">Country4</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home