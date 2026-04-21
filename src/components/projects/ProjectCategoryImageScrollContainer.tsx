import type {ProjectData} from "../../json-interfaces/projects.tsx";
import {ProjectCategoryImageComponent} from "./ProjectCategoryImageComponent.tsx";

import {type RefObject, useRef, useState} from 'react';

export function ProjectCategoryImageScrollContainer({ someCategoryData, someRightInfoPanel } : { someCategoryData: ProjectData[], someRightInfoPanel: RefObject<HTMLDivElement | null> }) {

    const outerContainer = useRef<HTMLDivElement>(null);
    const scrollContainer = useRef<HTMLDivElement>(null);
    const panelElement = someRightInfoPanel;

    const [scrollWidth, setScrollWidth] = useState<string>();
/*
    window.addEventListener('resize', () => {
        console.log("[ProjectCategoryImageScrollContainer] Resize called!");
        if (scrollContainer.current !== null && outerContainer.current !== null && panelElement.current !== null)
        {
            let calculatedWidth = outerContainer.current.getBoundingClientRect().x - panelElement.current.getBoundingClientRect().x;
            console.log("[ProjectCategoryImageScrollContainer] Setting the width! Value: " + Math.abs(calculatedWidth).toString());

            /!*scrollContainer.current.setAttribute("width", calculatedWidth.toString());*!/
            setScrollWidth(calculatedWidth.toString());
        }
    });

    if (scrollContainer.current !== null && outerContainer.current !== null && panelElement.current !== null)
    {
        let calculatedWidth = outerContainer.current.getBoundingClientRect().x - panelElement.current.getBoundingClientRect().x;
        console.log("[ProjectCategoryImageScrollContainer] Setting the width! Value: " + Math.abs(calculatedWidth).toString());

        /!*scrollContainer.current.setAttribute("width", calculatedWidth.toString());*!/
        setScrollWidth(calculatedWidth.toString());
    }*/

    /* TODO: Figure out how to caluclate the width correctly*/
    return (
        <div ref={outerContainer} className='w-full pl-12 pr-12'>
            <div ref={scrollContainer} className='reg-30-div bg-clr-invisible p-12 max-h-full flex flex-row overflow-x-auto w-full min-w-0'>
                <ul className='flex gap-4'>
                    {someCategoryData.map((data, index) => (
                        <ProjectCategoryImageComponent key={"CategoryImage" + index} someCategoryData={data}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}