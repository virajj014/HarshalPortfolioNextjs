import React from 'react'
import styles from './Card2_right.module.css'
import Image from 'next/image'
const Card2_right = (props) => {
    return (
        <div className={styles.card_outer}>
            <div className={styles.right}>
                <div className={styles.text}>
                    <h2>{props.cname}</h2>
                    <p>{props.cdescription}
                    </p>
                </div>
                <div><button><a href={props.cvisit}>Visit</a></button>
                    <button><a href={props.ccode}>Source Code</a></button></div>
            </div>
            <div className={styles.left}>
                <Image src={props.cimg} layout='responsive' style={{ borderRadius: '10px' }} />
            </div>
        </div>
    )
}

export default Card2_right