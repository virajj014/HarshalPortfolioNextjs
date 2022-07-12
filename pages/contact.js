
import contactpic from '../media/contactuspic.png'
import styles from '../styles/Contact.module.css'
import Image from 'next/dist/client/image'
import Navbar from '../components/Navbar'
import Homesection5 from '../components/Homesection5'

const contact = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.contact_outer}>
                <div className={styles.contact_inner}>
                    <p>Contact Me</p>
                    <div className={styles.contact_innermost}>
                        <div className={styles.img}>
                            <Image src={contactpic} />
                        </div>
                        <form>
                            <p>Get in touch</p>
                            <input placeholder='Name' />
                            <input placeholder='Email' />
                            <textarea placeholder='Message' />
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <Homesection5 />
        </div>
    )
}

export default contact