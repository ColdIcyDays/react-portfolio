import styles from "./contact.module.css"

export function ContactContainer() {
    return (
        <div className={styles.contact_container}>
            <div className={styles.contact_content_container}>
                <div className={styles.contact_content_side_contactinfo_container}>
                    <div className={styles.contact_content_side_contactinfo_compartment}>
                        <h3>Contact</h3>
                        <h1>Reach out to me!</h1>
                        <p>I live in the Malmö area </p> <h2>(add address)</h2>
                    </div>

                    <div className={styles.contact_content_side_contactinfo_compartment}>
                        <a href={"https://www.linkedin.com/in/erik-ljungman"}>Linkedin</a>
                    </div>
                </div>

                <div className={styles.contact_content_side_container}>
                </div>
            </div>
        </div>
    );
}