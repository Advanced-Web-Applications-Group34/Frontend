import React from 'react'
import styles from '../Styles/searchbar.module.css'

export default function Searchbar() {
    return (
        <div>
            <div className={styles.searchbar}>

                <input type="text" placeholder="Let's find foods comforting you !" />

            </div>
        </div>
    )
}
