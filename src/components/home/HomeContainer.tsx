import styles from './home-style.module.css'

export function HomeContainer() {
    return (
        <div className={styles.home_container}>
            <div className={styles.home_image_container}>

            </div>
            <div className={styles.home_shortabout_container}>
                <p className={styles.home_fullname_text}>Erik Ljungman</p>
                <p className={styles.home_shortabout_text}>Games and full-stack developer</p>
            </div>

            <div className={styles.home_projects_and_socials_container}>
                <div className={styles.home_projects_container}>
                    <p> These are my projects</p>
                    <p> I like this color palette!</p>
                    <a href={"https://coolors.co/0a369d-4472ca-5e7ce2-92b4f4-cfdee7"}>This one!</a>
                    <br/>
                    <a href={"https://coolors.co/397367-63ccca-5da399-42858c-35393c"}>And this one! its pretty cool!</a>
                </div>

                <div className={styles.home_socials_container}>
                    <p>Here are my socials</p>
                </div>
            </div>
        </div>
    )
}