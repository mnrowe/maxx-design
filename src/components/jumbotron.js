import React from "react"
import styles from "./jumbotron.module.css"

export default props => (
  <div className={styles.container}>
    <img className={styles.image} src={props.src} alt={props.alt} />
  </div>
)
