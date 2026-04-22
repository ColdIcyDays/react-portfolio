import type {CategoryData} from "../../json-interfaces/projects.tsx";
import {ProjectCategoryImageScrollContainer} from "./ProjectCategoryImageScrollContainer.tsx";

/*
* TODO: Consider making more images appear if there is space, i.e get the projects and get the cover image and add it depending on the space.
*  The projects should also be ordered by date. So newest projects first to oldest. */
export function ProjectCategory({ ProjCategoryData }: { ProjCategoryData: CategoryData}) {
    return (
        <div className="h-max flex flex-row items-center">
            {/*<img src={ProjCategoryData.CategoryImage} className='ml-auto reg-10-img'/>*/}
            <ProjectCategoryImageScrollContainer someCategoryData={ProjCategoryData.Data}
                                                 aProjectCategorySubpageName={ProjCategoryData.CategorySubpageDenotation}/>

            <div className='reg-30-div  w-[256px] h-max min-h-85 min-w-lg ml-auto flex flex-col'>
                <h1 className='text-center p-8 text-3xl'>{ProjCategoryData.CategoryTitle}</h1>
                <p className='p-8'>{ProjCategoryData.CategoryDescription}</p>
                <div className='h-[50px]'></div>
                {/*<Link className='block m-auto' to={"/Projects/" + ProjCategoryData.CategorySubpageDenotation}>
                    <button className='std-button'>Learn more</button>
                </Link>*/}
            </div>
        </div>
    );
}