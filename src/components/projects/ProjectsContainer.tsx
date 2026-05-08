import {Navigate} from "react-router-dom";
import {useParams} from "react-router";
import {ProjectDataLoader} from "./ProjectDataLoader.tsx";
import type {ProjectData, CategoryData} from "../../json-interfaces/projects.tsx";
import {useState} from "react";
import {ProjectCategory} from "./ProjectCategory.tsx";
import {ProjectDetailsContainer} from "./details/ProjectDetailsContainer.tsx";


export function ProjectsContainer() {
    const [dataLoader] = useState(new ProjectDataLoader());

    const params = useParams();
    /*const isInCategory : boolean = params["category"] !== undefined;*/
    const isInDetails : boolean = params["projectname"] !== undefined;

    if (isInDetails)
    {
        const projName = params["projectname"];
        if (projName === undefined) 
        {
            return (
                <Navigate to={"/Home"}/>
            );
        }
        
        const categoryData = dataLoader.GetProjectCategoryData(params["category"]);

        if (categoryData === undefined)
        {
            return (
                <Navigate to={"/Home"}/>
            );
        }

        let foundData: ProjectData | undefined = undefined;
        for (let i = 0; i < categoryData.length; i++)
        {

            if (categoryData[i].ProjectName.replace(/\s/, "_") === projName)
            {
                foundData = categoryData[i];
                break;
            }
        }

        if (foundData === undefined)
        {
            return (
                <Navigate to={"/Home"}/>
            );
        }


        return(
                <ProjectDetailsContainer
                    someProjectData={foundData}
                />
        );
    }

   /* if (isInCategory)
    {
        const category = dataLoader.GetProjectCategory(params["category"]);
        return (
            <ProjectsListContainer
                someProjectData={category}
            />
        );
    }*/

    return (
      <div className='min-h-dvh w-auto grow auto-rows-min'>

          <div className="reg-top-titlediv rounded-t-none rounded-r-none">
            <h1 className='reg-top-titlediv-text'>Projects</h1>
          </div>

          <div className='h-12'></div>

          <div className='grid gap-12'>
              {
                  dataLoader.GetAllProjectCategories().map((data: CategoryData, index)=> (<ProjectCategory
                      key={"ProjCategory"+ index}
                      ProjCategoryData={data}/>))
              }
          </div>


      </div>

    );

    /*return (
        <div className={styles.projects_container}>
            <div className={styles.projects_category_container}>
                <div className={styles.projects_category_image_container}>
                    <img src={testImage} alt={"projectLogo"} />
                </div>
                <div className={styles.projects_category_text_container}>
                    <h1>Webdev Projects</h1>
                    <p>These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing! These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing!</p>
                    <Link to={`/Projects/WebdevProjects`}>
                        <button className={styles.projects_category_button}>Goto webdev projects</button>
                    </Link>
                </div>
            </div>

            <div className={styles.projects_category_container}>
                <div className={styles.projects_category_image_container}>
                    <img src={testImage} alt={"projectLogo"} />
                </div>
                <div className={styles.projects_category_text_container}>
                    <h1>Game Projects</h1>
                    <p>These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing! These are my webdev projects i have made, they are cool and neat and cool and sometimes even quite neat. WOW what a wonderful thing!</p>
                    <Link to={`/Projects/GameProjects`}>
                        <button className={styles.projects_category_button}>Goto game projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )*/
}