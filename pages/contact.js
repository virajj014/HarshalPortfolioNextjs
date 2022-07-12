import contactpic from '../media/contactuspic.png'
import styles from '../styles/Contact.module.css'
import Image from 'next/dist/client/image'
import Navbar from '../components/Navbar'
import Homesection5 from '../components/Homesection5'
import emailjs from '@emailjs/browser';
// npm install @emailjs/browser

const contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6dx3qcw', 'template_engszny', e.target, '7MNOD5wWIh_qZLsI9')
            .then((result) => {
                alert('Email sent successfully');
                e.target.reset()
            }, (error) => {
                alert(error.text);
            });
    };
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
                        <form onSubmit={sendEmail}>
                            <p>Get in touch</p>
                            <input name='user_name' placeholder='Name' />
                            <input name='user_email' placeholder='Email' />
                            <textarea name='message' placeholder='Message' />
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