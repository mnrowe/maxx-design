import React from "react"
import styles from "./footer.module.css"

export default props => (
  <div className={styles.container}>
    <footer className={styles.footer}>
      © 2016 <span className={styles.underlineText}>{props.name} Web Dev</span> All Rights Reserved.
    </footer>
  </div>
)
