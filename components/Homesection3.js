import styles from '../styles/Homesection3.module.css'
import Card1_left from './cards/Card1_left'
import Card2_right from './cards/Card2_right'
import projectimg1 from '../media/project/proj1.png'
import projectimg2 from '../media/project/proj2.png'
import Link from 'next/dist/client/link'
const Homesection3 = () => {
    return (

        <div className={styles.section3outer}>
            <h1>My Top Projects</h1>
            <Card1_left cimg={projectimg1} cname="Ecommerce Website" cdescription="I Built an Ecommerce Platform using MERN,It has all the functionalities like Amazon" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

            <Card2_right cimg={projectimg2} cname="Movie Streaming Platform" cdescription="I Built a Movie Streaming Platform using MERN,It has all the functionalities like Netflix" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

            <Card1_left cimg={projectimg1} cname="Ecommerce Website" cdescription="I Built an Ecommerce Platform using MERN,It has all the functionalities like amazon" cvisit="/https://www.amazon.in/" ccode="https://www.amazon.in/" />

            <Card2_right cimg={projectimg2} cname="Movie Streaming Platform" cdescription="I Built a Movie Streaming Platform using MERN,It has all the functionalities like Netflix" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />
            <Link href="/projects"><button className={styles.mybtn}>Show All Projects</button></Link>
        </div>

    )
}

export default Homesection3
