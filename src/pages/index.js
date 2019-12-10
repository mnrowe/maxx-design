import React from "react"
import logo from "./company-logo.png"
import hero from "./hero1.jpg"
import boat from "./boat.jpg"
import road from './road.jpg'
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
      <Jumbotron src={hero} alt="image with snow" />
      <h2 className="cards-title">PORTFOLIO</h2>
      <div className="deck">
        <Card siteName="test" siteUrl="test.com" src={boat} />
        <Card siteName="dog" siteUrl="dog.com" src={road}/>
        <Card siteName="so" siteUrl="so.com" src={trees} />
      </div>
    </section>
    <Footer name="Sam's" />
  </div>
)
