import styles from "./sidebar-style.module.css"
import {SidebarPagelinksContainer} from "./Sidebar-Pagelinks-Container.tsx";
import {SidebarContainer} from "./SidebarContainer.tsx";
import pfpIMG from "../../imgs/profile_picture.jpg"


export function Sidebar({somePageNames=["Home"]}) {
    return (
        <SidebarContainer>
            <div className={styles.sidebar_top_container}>
                <img src={pfpIMG} className="rounded-full ring-3 ring-clr-10-1 w-[75%] block m-auto mt-8"/>
            </div>

            <SidebarPagelinksContainer
                somePageNames = {somePageNames}
            />

            {/*<div className={styles.sidebar_top_container} style={{marginTop: "auto"}}>
                <p style={{textAlign: "center"}}>Bottom</p>
                <p style={{textAlign: "center"}}>Socials go here</p>
            </div>*/}
        </SidebarContainer>
    )
}
