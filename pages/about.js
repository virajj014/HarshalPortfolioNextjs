/* eslint-disable react/no-unescaped-entities */
import Navbar from '../components/Navbar.js'
import aboutimg from '../media/about-img.png'
import styles from '../styles/About.module.css'
import Image from 'next/dist/client/image'
import Head from 'next/head.js'
const about = () => {
    return (
        <div className={styles.aboutoutermost}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Splash&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <div className={styles.section1}>
                <h1 className={styles.head1}>About Me</h1>
                <p className={styles.para1}>I love building webpages & apps, I learnt MERN stack development for full stack & React Native for Apps, I enjoy learning new stuff everyday and I don't focus on certificates my main achievements are my skills which I got by building projects & solving bugs. I am also a programmer & I am still improving myself in this field, my main focus is Data Structures & Algorithms.<br /><br />

                    I did many internships related to web development, currently I am working as a mentor/educator at GeeksForGeeks & also an intern as a full-stack web developer at DOA Guru Infosystems & I am willing to learn more.
                </p>
                <div className={styles.imgcont}>
                    <Image src={aboutimg} layout='responsive' />
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>Education</h1>
                        <p><span>(2004-2018)</span> Christ Church Boy's School Jabalpur ( 10th with 72% )</p>
                        <p><span>(2018-2020)</span> Maharashtra High School Jabalpur ( 12th PCM with 80% )</p>
                        <p><span>(2020-2024)</span> Gyan Ganga Institute of Technology Jabalpur (Btech in CSE with AIML)</p>
                    </div>
                </div>

                <div className={styles.detailsright}>
                    <div className={styles.detailsinner}>
                        <h1>Experience</h1>
                        <p><span>(2020 - till date)</span> I found a Coding community Coders Hub</p>
                        <p><span>(2021 + 3months)</span> Worked as an intern at 3bitDigital in Full Stack Development</p>
                        <p><span>(2021 - till date)</span> Worked as a Mentor/Educator at GeeksForGeeks in Web/App Development</p>
                        <p><span>(2022 - till date)</span> Working as an intern at DOA Guru Infosystems in MERN Stack Develpoment</p>
                    </div>
                </div>

                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>My Skills</h1>
                        <p><span>Programming in</span> C, C++, Python & Javascript</p>
                        <p><span>Comptitive Programming with</span> DSA in C/C++ </p>
                        <p><span>Web Development in</span> MERN Stack</p>
                        <p><span>App Development</span> React Native</p>
                    </div>
                </div>
            </div>

            <div className={styles.section1}>
                <h1 className={styles.head2}>To Know More about me</h1>
                <button><a href='https://drive.google.com/file/d/1_Ozf6uA3LpzqPqTC8IIrQhCGWTmScIE_/view?usp=sharing'>Download Resume</a></button>
            </div>
        </div>
    )
}

export default about
