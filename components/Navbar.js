import styles from '../styles/Navbar.module.css'
import signature from '../media/hj_signature.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const Navbar = () => {
    const [navactive, setnavactive] = useState('false');
    const [homeactive, sethomeactive] = useState('false');
    const [aboutactive, setaboutactive] = useState('false');
    const [projectactive, setprojectactive] = useState('false');
    const [contactactive, setcontactactive] = useState('false');
    const [routerpath, setrouterpath] = useState('');
    const router = useRouter()

    useEffect(() => {
        setrouterpath(router.pathname);
    });

    // if (routerpath == '/') {
    //     // sethomeactive('true')
    //     console.log(homeactive)
    // }

    const handlenavbarclick = () => {
        if (navactive == 'false') {
            setnavactive('true')
        }
        else {
            setnavactive('false')

        }
    }
    return (
        <div className={styles.navouter}>
            <div className={styles.left}>
                <Image src={signature} className={styles.sign} width={"100px"} height={"50px"} />
            </div>
            <div className={navactive == 'true' ? `${styles.nav_toggler} ${styles.navactive}` : styles.nav_toggler} onClick={handlenavbarclick}>
                <span></span>
            </div>
            <div className={styles.right} >
                {router.pathname == '/' ? <Link href="/"><button className={styles.pageactive}>Home</button></Link> :
                    <Link href="/"><button>Home</button></Link>
                }
                {router.pathname == '/about' ? <Link href="/about"><button className={styles.pageactive}>About</button></Link> : <Link href="/about"><button>About</button></Link>}

                {router.pathname == '/projects' ? <Link href="/projects"><button className={styles.pageactive}>Projects</button></Link> : <Link href="/projects"><button>Projects</button></Link>}

                {router.pathname == '/contact' ? <Link href="/contact"><button className={styles.pageactive}>Contact</button></Link> : <Link href="/contact"><button>Contact</button></Link>}
            </div>
            {
                navactive == 'true' ? <div className={styles.right1} >
                    {router.pathname == '/' ? <Link href="/"><button className={styles.pageactive}>Home</button></Link> :
                        <Link href="/"><button>Home</button></Link>
                    }
                    {router.pathname == '/about' ? <Link href="/about"><button className={styles.pageactive}>About</button></Link> : <Link href="/about"><button>About</button></Link>}

                    {router.pathname == '/projects' ? <Link href="/projects"><button className={styles.pageactive}>Projects</button></Link> : <Link href="/projects"><button>Projects</button></Link>}

                    {router.pathname == '/contact' ? <Link href="/contact"><button className={styles.pageactive}>Contact</button></Link> : <Link href="/contact"><button>Contact</button></Link>}
                </div> : <></>
            }
        </div>
    )
}

export default Navbar