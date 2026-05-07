import styles from "./sidebar-style.module.css"
import {SidebarPagelinksContainer} from "./Sidebar-Pagelinks-Container.tsx";
import {SidebarContainer} from "./SidebarContainer.tsx";
import {Link} from "react-router-dom";


export function Sidebar({somePageNames=["Home"]}) {
    return (
        <div className='relative z-50'>
            <div className='hidden xl:block'>
                <SidebarContainer
                    isMobileSidebar={false}>
                    <div className={styles.sidebar_top_container}>
                        <Link to={"/Contact"}>
                            <img src={"/imgs/profile_picture.jpg"}
                                 className="rounded-full ring-3 ring-clr-10-1 w-[75%] block m-auto mt-8 hover:scale-105 transition-transform"/>
                        </Link>
                    </div>

                    <SidebarPagelinksContainer
                        somePageNames = {somePageNames}
                    />

                    {/*<div className={styles.sidebar_top_container} style={{marginTop: "auto"}}>
                    <p style={{textAlign: "center"}}>Bottom</p>
                    <p style={{textAlign: "center"}}>Socials go here</p>
                </div>*/}
                </SidebarContainer>
            </div>
            <div className='block xl:hidden'>

                <SidebarContainer
                    isMobileSidebar={true}>
                    <div className={styles.sidebar_top_container}>
                        <Link to={"/Contact"}>
                            <img src={"/imgs/profile_picture.jpg"}
                                 className="rounded-full ring-3 ring-clr-10-1 w-[75%] block m-auto mt-8 hover:scale-105 transition-transform"/>
                        </Link>
                    </div>

                    <SidebarPagelinksContainer
                        somePageNames = {somePageNames}
                    />

                    {/*<div className={styles.sidebar_top_container} style={{marginTop: "auto"}}>
                    <p style={{textAlign: "center"}}>Bottom</p>
                    <p style={{textAlign: "center"}}>Socials go here</p>
                </div>*/}
                </SidebarContainer>
            </div>
        </div>
    )
}
