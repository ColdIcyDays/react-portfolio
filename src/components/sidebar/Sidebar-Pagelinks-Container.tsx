import styles from "./sidebar-style.module.css";
import {SidebarPagelinksButton} from "./SidebarPagelinksButton.tsx";
import { useLocation } from 'react-router-dom'
import {useState} from "react";

export function SidebarPagelinksContainer({somePageNames = ["Home"]}) {
    const pathName = useLocation().pathname;
    console.log("Update path name, current path: " + pathName);
    const [currentPageActive, setActivePage] = useState(() : string => {

        let loadedPath = pathName;

        loadedPath = loadedPath.substring(loadedPath.lastIndexOf('/') + 1, loadedPath.length);

        console.log("Current path: " + loadedPath);

        return loadedPath;
    });
    return (
        <ul className='styles.sidebar_pagelinks_container mr-auto ml-auto mt-8'>
            {
                somePageNames.map((aPageName) => (
                    <SidebarPagelinksButton
                        key={aPageName}
                        name={aPageName}
                        isHighlighted={useLocation().pathname === "/" + aPageName}
                    />
                ))
            }
        </ul>
    )
}