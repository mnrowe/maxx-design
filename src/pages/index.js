import React from "react"
import logo from "./company-logo.png"
import hero from "./hero1.jpg"
import boat from "./boat.jpg"
import road from "./road.jpg"
import trees from "./trees.jpeg"
import Card from "../components/card"
import Footer from "../components/footer"
import Jumbotron from "../components/jumbotron"

export default () => (
  <div className="container">
    <header>
      <img className="max-logo" src={logo} alt="MAXX Potential Logo" />
      <div className="designer-quote">
        <h2 className="intro">HELLO I'M SAM</h2>
        <h3 className="title">Web Designer</h3>
      </div>
    </header>
    <section className="content">
      <Jumbotron src={hero} alt="Big mountain with snow on it with blue lake at bottom and trees all around" />
      <h2 className="cards-title">PORTFOLIO</h2>
      <div className="deck">
        <Card
          siteName="test"
          siteUrl="test.com"
          alt="Boat with sunset in background"
          src={boat}
        />
        <Card
          siteName="dog"
          siteUrl="dog.com"
          alt="Trees with long dirt road"
          src={road}
        />
        <Card
          siteName="so"
          siteUrl="so.com"
          alt="Multiple trees with fog above them"
          src={trees}
        />
      </div>
    </section>
    <Footer name="Sam's" />
  </div>
)
