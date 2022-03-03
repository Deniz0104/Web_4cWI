import React, { Component } from "react";
import styles from "./Vote.module.css"

export default class Vote extends Component{
    render() {
        return(
            <div className={styles.card}>
                <h1>{this.props.candidate}</h1>
                <h2>{this.props.location}</h2>
                <p>385</p>
            </div>
        )
    }
}