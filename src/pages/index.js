import React from "react"
import logo from "../imgs/company-logo.png"
import hero from "../imgs/hero1.resized.jpg"
import boat from "../imgs/boat.resized.jpg"
import road from "../imgs/road.resized.jpg"
import trees from "../imgs/trees.resized.jpeg"
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
          siteName="TECHNOLINE"
          siteUrl="techoline.com"
          alt="Boat with sunset in background"
          src={boat}
        />
        <Card
          siteName="MAJESTIQUE"
          siteUrl="majestique.com"
          alt="Trees with long dirt road"
          src={road}
        />
        <Card
          siteName="SILVERZIM"
          siteUrl="silverzim.com"
          alt="Multiple trees with fog above them"
          src={trees}
        />
      </div>
    </section>
    <Footer name="Sam's" />
  </div>
)
