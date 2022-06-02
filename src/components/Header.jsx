import React from "react"


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand disabled">Matt Jackson</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" id="aboutMe">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header