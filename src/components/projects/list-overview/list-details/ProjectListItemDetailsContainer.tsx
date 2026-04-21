import type {ProjectData} from "../../../../json-interfaces/projects.tsx";
import {useParams} from "react-router";
import styles from "./project-details.module.css"
import testIMG from "../../../../TestData/imgs/munamii_logo.png"

export function ProjectListItemDetailsContainer({someData} : {someData: ProjectData | undefined})
{

    if (someData === undefined)
    {
        const handle = useParams();

        const category = handle["category"];
        const projectName = handle["projectname"];
        /* This should just navigate to home, probably. */
        return (
            <div>
                <p>Category is {category} and projectName is {projectName}</p>
            </div>
        );
    }


    return (
      <div className={styles.project_list_item_details_container}>

          <div className={styles.project_list_item_details_top_image_container}>
            <img src={testIMG} className={styles.project_list_item_details_top_image}/>
            <button>Go to page</button>
          </div>
          <h1>{someData.ProjectName}</h1>
          {/* TODO: Consider if this is a bit to dangerous. The data i'm converting is the data in my github, so it should be fine.*/}
          <p dangerouslySetInnerHTML={{__html : someData.HTML_LongProjectDesc}}>

          </p>
          {/*<p>
              This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body.
              It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. <h2> Middle header </h2>It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going. This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. <h2> Middle header </h2> Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama, it keeps on going.This is the body. It's a really long description. Wowie mama,
          </p>*/}
      </div>
    );
}