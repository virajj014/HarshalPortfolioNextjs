import styles from '../styles/Homesection1.module.css'
import mainimg from '../media/hj_mainimg.png'
import Image from 'next/image'

const Homesection1 = () => {

    return (
        <div className={styles.section1outer}>
            <div className={styles.left}>
                <p className={styles.head2}>Hello there,</p>
                <p className={styles.head1}>I am <span>Harshal</span></p>
                <p className={styles.ptag}>A 19 year old tech enthusiast,I am a web developer & an upcoming computer science engineer, currently I work as a Mentor/Educator at GeeksForGeeks</p>
            </div>
            <div className={styles.right}>
                <Image src={mainimg} layout='responsive' />
            </div>

        </div>
    )
}

export default Homesection1