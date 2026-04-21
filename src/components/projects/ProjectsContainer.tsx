import {Navigate} from "react-router-dom";
import {useParams} from "react-router";
import {ProjectDataLoader} from "./ProjectDataLoader.tsx";
import {ProjectsListContainer} from "./list-overview/ProjectsListContainer.tsx";
import {ProjectListItemDetailsContainer} from "./list-overview/list-details/ProjectListItemDetailsContainer.tsx";
import type {CategoryData, ProjectData} from "../../json-interfaces/projects.tsx";
import {useState} from "react";
import {ProjectCategory} from "./ProjectCategory.tsx";


export function ProjectsContainer() {
    const [dataLoader] = useState(new ProjectDataLoader());

    const params = useParams();
    const isInCategory : boolean = params["category"] !== undefined;
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

        let foundData: CategoryData | undefined = undefined;
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
                <ProjectListItemDetailsContainer
                    someData={foundData}
                />
        );
    }

    if (isInCategory)
    {
        const category = dataLoader.GetProjectCategory(params["category"]);
        return (
            <ProjectsListContainer
                someProjectData={category}
            />
        );
    }

    return (
      <div className='h-dvh w-auto grow auto-rows-min'>

          <div className="ml-12 h-[256px] reg-30-div right-0 flex flex-col-reverse align-bottom">
            <h1 className='text-8xl pb-8 pl-8 w-min h-min'>Projects</h1>
          </div>

          <div className='h-12'></div>

          <div className='grid gap-12'>
              {
                  dataLoader.GetAllProjectCategories().map((data: ProjectData, index)=> (<ProjectCategory
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