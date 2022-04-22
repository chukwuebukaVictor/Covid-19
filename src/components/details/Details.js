import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom'
import './details.css'

function Details() {
  return (
    <div>
      <div className="d-flex nav">
        <div className="nav1">
       <Link to="/"><MdArrowBackIosNew className="back-icon"/></Link>
        <h2 className="header">COVID cases per country</h2>
        </div>
        <div className="icon">
          <AiOutlineSetting />
          <FaMicrophone />
        </div>
      </div>
    </div>
  )
}

export default Details