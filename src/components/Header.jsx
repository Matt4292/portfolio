import React from "react"


function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand disabled">Matt Jackson</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="aboutMe">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header