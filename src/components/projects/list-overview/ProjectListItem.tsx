import styles from "./projects-list-style.module.css"
import type {CategoryData} from "../../../json-interfaces/projects.tsx";
import testIMG from "../../../TestData/imgs/munamii_logo.png"

export function ProjectListItem({someData, aCategoryCTA}: {someData: CategoryData, aCategoryCTA: string}) {
    return (
      <div className={styles.project_list_item_container}>
          <div className={styles.project_list_item_image_container}>
                <img src={testIMG}/>
          </div>
          <h1>{someData.ProjectName}</h1>
          <p>{someData.ProjectDesc}</p>
          <div className={styles.project_list_item_button_container}>
              <button>Details</button>
              <button>{aCategoryCTA}</button>
          </div>
      </div>
    );
}