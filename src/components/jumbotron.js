import React from "react"
import containerStyle from './jumbotron.module.css'

export default props => (
    <img className={containerStyle.container} src={props.src} alt={props.alt} />
)