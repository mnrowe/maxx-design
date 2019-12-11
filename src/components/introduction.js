import React from "react"
import styles from "./introduction.module.css"

export default props => (
  <div className={styles.container}>
    <p className={styles.intro}>HELLO I'M {props.name}</p>
    <p className={styles.title}>Web Designer</p>
  </div>
)
