import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.sitetitle}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.abouttextt}</a>
            </li>
          </ul>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.togglebutton} role="switch" id="flexSwitchCheckChecked"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enabled</label>
        </div>
    </nav>

    </>
  )
}

Navbar.propTypes = {
    sitetitle: PropTypes.string,
    abouttextt: PropTypes.string
}

Navbar.defaultProps = {
    sitetitle: "default type",
}