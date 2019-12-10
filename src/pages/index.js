import React from "react"
import logo from "./company-logo.png"

export default () => (
  <header style={{ display: `flex` }}>
    <img style={{ maxWidth: `150px` }} src={logo} alt="MAXX Potential Logo" />
    <quote>
      <h2>HELLO I'M SAM</h2>
      <h3>Web Designer</h3>
    </quote>
  </header>
)
