import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <Link className="navbar-brand" to="/">Mobomania</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        
      </ul>
    </div>
  </nav>
  )
}
// <li className="nav-item active">
//           <Link className="nav-link" to="/addPhone">Add Phone <span className="sr-only">(current)</span></Link>
//         </li>