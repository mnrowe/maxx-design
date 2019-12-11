import React from "react"
import logo from "./company-logo.png"
import hero from "./hero1.jpg"
import boat from "./boat.jpg"
import road from "./road.jpg"
import trees from "./trees.jpeg"
import Card from "../components/card"
import Footer from "../components/footer"
import Jumbotron from "../components/jumbotron"
import Introduction from "../components/introduction"

export default () => (
  <div className="container">
    <header>
      <img className="max-logo" src={logo} alt="MAXX Potential Logo" />
      <Introduction name="SAM" />
    </header>
    <section className="content">
      <Jumbotron
        src={hero}
        alt="Big mountain with snow on it with blue lake at bottom and trees all around"
      />
      <p className="cards-title">PORTFOLIO</p>
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
