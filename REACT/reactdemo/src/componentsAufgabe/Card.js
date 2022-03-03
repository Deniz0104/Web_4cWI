import React, { Component } from "react";
import styles from './Card.module.css';

export default class Card extends Component{
    render() {
        return (
            <div className={styles.card}>
                <img src="./images/cardimage.png" width="400" height="415"></img>
                <div className={styles.cardInfo}>
                    <div className={styles.name}>
                        {
                            this.props.title
                        }
                    </div>
                    <div className={styles.job}>
                        {
                            this.props.job
                        }
                    </div>
                </div>
            </div>
        )
    }
}