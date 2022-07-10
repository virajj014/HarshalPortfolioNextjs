/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '../styles/Homesection2.module.css'

const Homesection2 = () => {
    return (
        <div className={styles.section2outer}>
            <div className={styles.left}>
                <h1 className={styles.head1}>My skills</h1>
                <h1 className={styles.head2}>Web/App Development, Graphics Designing &
                    Programming</h1>
            </div>
            <div className={styles.right}>
                <p>
                    I love building webpages & apps, I learnt MERN stack development for full stack & React Native for Apps, I enjoy learning new stuff everyday and I don't focus on certificates my main achievements are my skills which I got by building projects & solving bugs. I am also a programmer & I am still improving myself in this field, my main focus is Data Structures & Algorithms.
                    <br />
                    I did many internships related to web development, currently I am working as a mentor/educator at GeeksForGeeks & also an intern as a full-stack web developer at DOA Guru Infosystems & I am willing to learn more.
                </p>
            </div>
        </div>
    )
}

export default Homesection2