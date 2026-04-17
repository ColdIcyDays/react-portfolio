import styles from "./sidebar-style.module.css"
import {SidebarPagelinksContainer} from "./Sidebar-Pagelinks-Container.tsx";
import {SidebarContainer} from "./SidebarContainer.tsx";



export function Sidebar({somePageNames=["Home"]}) {
    return (
        <SidebarContainer>
            <div className={styles.sidebar_top_container}>
                <p style={{textAlign: "center"}}>Logo goes here</p>
                <p style={{textAlign: "center"}}>Erik Ljungman</p>
            </div>

            <SidebarPagelinksContainer
                somePageNames = {somePageNames}
            />

            <div className={styles.sidebar_top_container} style={{marginTop: "auto"}}>
                <p style={{textAlign: "center"}}>Bottom</p>
                <p style={{textAlign: "center"}}>Socials go here</p>
            </div>
        </SidebarContainer>
    )
}
