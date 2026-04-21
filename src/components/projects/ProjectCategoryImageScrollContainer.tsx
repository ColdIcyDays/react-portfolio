import type {ProjectData} from "../../json-interfaces/projects.tsx";
import {ProjectCategoryImageComponent} from "./ProjectCategoryImageComponent.tsx";

export function ProjectCategoryImageScrollContainer({ someCategoryData } : { someCategoryData: ProjectData[] }) {
    /* TODO: Figure out how to caluclate the width correctly*/
    return (
        <div  className='w-full pl-12 pr-12'>
            <div className='reg-30-div bg-clr-invisible p-12 max-h-full flex flex-row overflow-x-auto w-full min-w-0'>
                <ul className='flex gap-4'>
                    {someCategoryData.map((data, index) => (
                        <ProjectCategoryImageComponent key={"CategoryImage" + index} someCategoryData={data}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}