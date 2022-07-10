import styles from '../styles/Navbar.module.css'
import signature from '../media/hj_signature.png'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    return (
        <div className={styles.navouter}>
            <div className={styles.left}>
                <Image src={signature} className={styles.sign} width={"100px"} height={"50px"} />
            </div>
            <div className={styles.nav_toggler}>
                <span></span>
            </div>
            <div className={styles.right}>
                <Link href="/"><button>Home</button></Link>
                <Link href="/about"><button>About</button></Link>
                <Link href="/projects"><button>Projects</button></Link>
                <Link href="/contact"><button>Contact</button></Link>
            </div>
        </div>
    )
}

export default Navbar