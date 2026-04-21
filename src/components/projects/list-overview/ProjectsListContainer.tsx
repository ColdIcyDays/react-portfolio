import { useParams } from "react-router";
import styles from "./projects-list-style.module.css"
import type {ProjectData, CategoryData} from "../../../json-interfaces/projects.tsx";
import {ProjectListItem} from "./ProjectListItem.tsx";

export function ProjectsListContainer({ someProjectData } : { someProjectData: CategoryData | undefined }) {
    const handle = useParams();

    const category: string = handle["category"] != undefined ? handle["category"] : "undefined";

    const projectData: CategoryData | undefined = someProjectData;

    if (projectData == undefined)
    {
        return (
            <div>
                <p>Uh-oh! Something went wrong! {category} is NOT a valid category!</p>
            </div>
        );
    }
    const categoryData: ProjectData[] | undefined = projectData.Data;

    return (
        <div className={styles.project_list_container}>
            {
                categoryData.map((data, index) => (
                    <ProjectListItem
                        key={index}
                        someData={data}
                        aCategoryCTA={projectData.CategoryCTA}
                    />
                ))
            }
        </div>
    )
}