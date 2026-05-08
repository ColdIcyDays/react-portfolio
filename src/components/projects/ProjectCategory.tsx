import type {CategoryData} from "../../json-interfaces/projects.tsx";
import {ProjectCategoryImageScrollContainer} from "./ProjectCategoryImageScrollContainer.tsx";

/*
* TODO: Consider making more images appear if there is space, i.e get the projects and get the cover image and add it depending on the space.
*  The projects should also be ordered by date. So newest projects first to oldest. */
export function ProjectCategory({ ProjCategoryData }: { ProjCategoryData: CategoryData}) {
    return (
        <div className="h-max flex flex-col xl:flex-row items-center">
            <ProjectCategoryImageScrollContainer someCategoryData={ProjCategoryData.Data}
                                                 aProjectCategorySubpageName={ProjCategoryData.CategorySubpageDenotation}/>


            <div className='reg-30-div xl:w-1/2 w-full h-max min-h-85 xl:min-w-1/3 ml-auto flex flex-col mt-12 xl:mt-0 rounded-r-none'>
                <div className='xl:w-1/2 m-auto'>
                    <h1 className='m-auto text-center p-8 text-3xl'>{ProjCategoryData.CategoryTitle}</h1>
                    <p className='m-auto p-8'>{ProjCategoryData.CategoryDescription}</p>
                </div>
                <div className='h-[50px]'></div>
            </div>
        </div>
    );
}