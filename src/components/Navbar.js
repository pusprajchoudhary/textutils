import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       {/* <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
  </li> */}
        
      </ul>
    {/*  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
  </form> */}

<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >    {/*sabse phle isme maine javascript use kia phir maine backticks use `` jaike karan ye ek srting ban gya or jab backticks use krta hoon javascript me to ${}lga kr koi vi variable use kr skta hoon or isme yhi keh rha hai ki props ka mode light haii to dark ho jiye or dark hai to light ho jiye  */}
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable-dark-mode</label>
</div>

    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {tittle:PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  tittle: 'set tittle here',
  aboutText:'About'
};

                  
