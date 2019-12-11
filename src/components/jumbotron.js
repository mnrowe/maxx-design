import React from "react"
import styles from './jumbotron.module.css'

export default props => (
    <img className={styles.container} src={props.src} alt={props.alt} />
)