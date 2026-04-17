import styles from "./sidebar-style.module.css";
import {SidebarPagelinksButton} from "./SidebarPagelinksButton.tsx";
import { useLocation } from 'react-router-dom'

export function SidebarPagelinksContainer({somePageNames = ["Home"]}) {

    somePageNames;
    return (
        <div className={styles.sidebar_pagelinks_container} style={{}}>
            {
                somePageNames.map((aPageName) => (
                    <SidebarPagelinksButton
                        key={aPageName}
                        name={aPageName}
                        isHighlighted={useLocation().pathname === "/" + aPageName}
                    />
                ))
            }
        </div>
    )
}