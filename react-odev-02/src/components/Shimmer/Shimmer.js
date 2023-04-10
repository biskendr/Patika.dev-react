import React from 'react'
import styles from './Shimmer.module.css'

function Shimmer({ width, height, circle }) {

    return (
        <div className={`${styles.main} ${circle ? styles.circle : ""}`} style={{ width, height }}></div>
    )
}

export default Shimmer