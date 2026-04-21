import styles from "./projects-list-style.module.css"
import type {ProjectData} from "../../../json-interfaces/projects.tsx";
import testIMG from "../../../TestData/imgs/munamii_logo.png"
import {Link} from "react-router-dom";
import {useParams} from "react-router";

export function ProjectListItem({someData, aCategoryCTA}: {someData: ProjectData, aCategoryCTA: string}) {

    let cleanProjectName = someData.ProjectName.replace(/\s/, "_")
    return (
      <div className={styles.project_list_item_container}>
          <div className={styles.project_list_item_image_container}>
                <img src={testIMG}/>
          </div>
          <h1>{someData.ProjectName}</h1>
          <p>{someData.ProjectDesc}</p>
          <div className={styles.project_list_item_button_container}>
              
              <Link to={useParams()["category"] + "/" + cleanProjectName}>
                <button className={styles.project_list_item_button}>Details</button>
              </Link>

              
              <button className={styles.project_list_item_button}>{aCategoryCTA}</button>
          </div>
      </div>
    );
}