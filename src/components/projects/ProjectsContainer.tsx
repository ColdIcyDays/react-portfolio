import styles from './projects-style.module.css'
import testImage from '../../TestData/imgs/munamii_logo.png'
import {Link} from "react-router-dom";

export function ProjectsContainer() {
    return (
        <div className={styles.projects_container}>
            <div className={styles.projects_category_container}>
                <div className={styles.projects_category_image_container}>
                    <img src={testImage} alt={"projectLogo"} />
                </div>
                <div className={styles.projects_category_text_container}>
                    <h1>Webdev Projects</h1>
                    <p>These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing! These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing!</p>
                    <Link to={`/Projects/WebdevProjects`}>
                        <button className={styles.projects_category_button}>Goto webdev projects</button>
                    </Link>
                </div>
            </div>

            <div className={styles.projects_category_container}>
                <div className={styles.projects_category_image_container}>
                    <img src={testImage} alt={"projectLogo"} />
                </div>
                <div className={styles.projects_category_text_container}>
                    <h1>Game Projects</h1>
                    <p>These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing! These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing!</p>
                    <Link to={`/Projects/GameProjects`}>
                        <button className={styles.projects_category_button}>Goto game projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}