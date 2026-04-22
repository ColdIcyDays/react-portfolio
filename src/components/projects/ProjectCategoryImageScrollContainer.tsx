import type {ProjectData} from "../../json-interfaces/projects.tsx";
import {ProjectCategoryImageComponent} from "./ProjectCategoryImageComponent.tsx";
import {useRef} from "react";

export function ProjectCategoryImageScrollContainer({ someCategoryData, aProjectCategorySubpageName } : { someCategoryData: ProjectData[], aProjectCategorySubpageName : string }) {
    const horizontalBar = useRef<HTMLDivElement>(null)

   /* window.addEventListener("wheel", (e) => {
        console.log("SCROLLING");
       if (e.deltaX > 0) {
           horizontalBar.current.scrollLeft += 100;
       }
       else {
           horizontalBar.current.scrollRight -= 100;
       }
    });*/

    return (
        <div  className='w-full pl-12 pr-12'>
            <div ref={horizontalBar} className='reg-30-div ring-clr-10-1/50 bg-clr-invisible p-12 max-h-full min-h-[404px] flex flex-row overflow-x-auto overflow-y-hidden w-full min-w-0'>
                <ul className='flex gap-12'>
                    {someCategoryData.toReversed().map((data, index) => (
                        <ProjectCategoryImageComponent key={"CategoryImage" + index} someCategoryData={data}
                                                       aProjectCategorySubpageName={aProjectCategorySubpageName}/>
                    ))}

                    <div className='w-[1px] h-[48px] shrink-0'> {/* This is so we have padding on the far right of the scroll bar.*/}

                    </div>
                </ul>
            </div>
        </div>
    );
}