import type {ProjectData} from "../../json-interfaces/projects.tsx";
import {useRef, useState} from "react";
import {Link} from "react-router-dom";

export function ProjectCategoryImageComponent({ someCategoryData, aProjectCategorySubpageName }: { someCategoryData: ProjectData, aProjectCategorySubpageName: string }) {
    const opacityRef = useRef<HTMLDivElement>(null);
    const [divOpacity, setDivOpacity] = useState<number>(0);

    if (window.innerWidth <= 1280 && divOpacity != 1)
    {
        ShowButtonDiv();
    }

    function ShowButtonDiv (){
        console.log("SHOWING DIV");
/*
        let options : ScrollIntoViewOptions = { block: "nearest" };
        opacityRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
*/

        setDivOpacity(1);
    }

    function HideButtonDiv (){
        console.log("Hiding DIV");

        if (window.innerWidth >= 1280)
        {
            setDivOpacity(0);
        }
        else
        {
            setDivOpacity(1);
        }
    }

    return (
        <div className='max-w-77 max-h-77 shrink-0 '>
            <div className='h-full w-full group/projectHovered'
                 onMouseEnter={ShowButtonDiv}
                 onMouseLeave={HideButtonDiv}>

                {/*<h1 className='relative w-77 m-auto text-black text-5xl text-center duration-500' style={{opacity: divOpacity}}>{someCategoryData.ProjectName}</h1>*/}

                <img className='transition-all duration-400 ease-in-out reg-10-img top-0 ring-clr-10-1/50 object-cover w-77 h-77 xl:group-hover/projectHovered:h-44 ' src={someCategoryData.ProjectThumbnailImage}/>

                <div ref={opacityRef}
                     className='w-full xl:hidden transition-all ease-in-out delay-100 duration-500 group-hover/projectHovered:block opacity-0 group-hover/projectHovered:opacity-100 '
                style={{opacity: divOpacity}}>
                        <h1 className='text-center text-2xl mt-4 mb-4'>{someCategoryData.ProjectName}</h1>
                    <div className='flex flex-row justify-evenly w-full'>
                        <Link className='w-[30%] m-auto' to={aProjectCategorySubpageName + "/" + someCategoryData.ProjectName.replace(/\s/, "_")}>
                            <button className='std-button w-full '>Details</button>
                        </Link>

                        <Link className='w-[30%] m-auto' to={someCategoryData.ProjectWebpage} target={"_blank"} rel='noopener noreferrer'>
                            <button className='std-button w-full '>Project</button>
                        </Link>


                       {/* <button className='std-button w-[30%] m-auto'>Project</button>*/}

                    </div>
                </div>
            </div>
        </div>
    );
}