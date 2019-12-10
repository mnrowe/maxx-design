import React from "react"
import logo from "./company-logo.png"
import hero from "./hero1.jpg"

export default () => (
  <div class="container">
    <header>
      <img class="max-logo" src={logo} alt="MAXX Potential Logo" />
      <quote>
        <h2 class="intro">HELLO I'M SAM</h2>
        <h3 class="title">Web Designer</h3>
      </quote>
    </header>
    <img class="jumbotron" src={hero} />
  </div>
)
