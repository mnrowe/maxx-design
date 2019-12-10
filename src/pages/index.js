import React from "react"
import logo from "./company-logo.png"
import hero from "./hero1.jpg"
import Card from "../components/card"
import Footer from "../components/footer"

export default () => (
  <div class="container">
    <header>
      <img class="max-logo" src={logo} alt="MAXX Potential Logo" />
      <quote class="designer-quote">
        <h2 class="intro">HELLO I'M SAM</h2>
        <h3 class="title">Web Designer</h3>
      </quote>
    </header>
    <section class="contnet">
      <img
        class="jumbotron"
        src={hero}
        alt="Mountains with snow and big blue lake"
      />
      <h2 class="cards-title">PORTFOLIO</h2>
      <div class="deck">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
    <Footer />
  </div>
)
