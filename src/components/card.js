import React from "react"
import styles from "./card.module.css"

export default props => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>TECHNOLINE</h1>
      <h2 className={styles.url}>technoline.com</h2>
    </div>
    <img className={styles.image} src={props.src} />
  </div>
)
