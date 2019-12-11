import React from "react"
import styles from "./card.module.css"

export default props => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <p className={styles.title}>TECHNOLINE</p>
      <p className={styles.url}><em>technoline.com</em></p>
    </div>
    <img alt={props.alt} className={styles.image} src={props.src} srcset={`${props.src}-256 256w`}/>
  </div>
)
