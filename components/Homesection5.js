import signature from '../media/hj_signature2.png'
import Image from 'next/image'
import styles from '../styles/Homesection5.module.css';
const Homesection5 = () => {
    return (
        <div className={styles.section5outermost}>
            <div className={styles.left}>
                <Image src={signature} className={styles.sign} width={"70px"} height={"40px"} />
            </div>
            <div className={styles.right}>
                <h1>
                    BUILT FROM SCRATCH BY ME :)
                </h1>
            </div>
        </div>
    )
}

export default Homesection5