import React, {Component} from 'react';
import styles from './List.module.css';


export default class List extends Component{
    render() {
        return (<div>
            <ul>
                <li className={styles.list}>Coffee</li>
                <li className={styles.list}>Tea</li>
                <li className={styles.list}>Beer</li>
            </ul>
        </div>
        )

    }
}