import React from "react"
import styles from "./card.module.css"

export default props => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <p className={styles.title}>{props.siteName}</p>
      <p className={styles.url}><em>{props.siteUrl}</em></p>
    </div>
    <div className={styles.frameContainer}>
        <img alt={props.alt} className={styles.image} src={props.src} />
    </div>
  </div>
)
