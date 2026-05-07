import type {ProjectData} from "../../json-interfaces/projects.tsx";
import {useState} from "react";


export function HomeHorizontalProjectScroll({ DataToScroll, AnimateReverse } : { DataToScroll: ProjectData[], AnimateReverse:boolean })
{

    const [scrollData, setScrollData] = useState<ProjectData[]>([]);

    if (scrollData.length === 0)
    {
        console.log("List Set data...");

        let dupedSortedData = DataToScroll;
        dupedSortedData = DataToScroll.sort(() => Math.random() - .5);

        const duplicatedData = [...dupedSortedData, ...dupedSortedData];

        /* TODO: Don't duplicate all data. Duplicate the images only! */

        console.log("Data length is + " + duplicatedData.length);
        setScrollData(duplicatedData);

        return (<></>);
    }

    console.log("Rendereing list");
    DataToScroll.map((data) => {
        console.log("Img dest: " + data.ProjectThumbnailImage);
    })

    return (
        <div className='flex w-svw mask-none h-full mx-auto gap-0 overflow-hidden  inf-scroll-container-horizontal' >
            <div className='inf-scroll-right min-w-max translate-x-[-100%] flex flex-row'
                 style={{animationDirection: AnimateReverse ? "reverse" : "normal",
                     transform: AnimateReverse ? "translateX(100%)" : "translateX(-100%)"}}>
                {
                    scrollData.map((Data, index) => (<img key={Data.ProjectName + index}
                                                     className='w-[376px] h-[376px] hover:scale-105 my-auto px-4 transition-all select-none' src={Data.ProjectThumbnailImage} alt={"AnimateIMG"}/>))
                }
            </div>

            <div className='inf-scroll-right min-w-max translate-x-[-100%] flex flex-row'
                 style={{animationDirection: AnimateReverse ? "reverse" : "normal",
                     transform: AnimateReverse ? "translateX(100%)" : "translateX(-100%)"}}>
                {
                    scrollData.map((Data, index) => (<img key={Data.ProjectName + index}
                                                          className= 'w-[376px] h-[376px] hover:scale-105 my-auto px-4 transition-all select-none' src={Data.ProjectThumbnailImage} alt={"AnimateIMG"}/>))
                }
            </div>
           {/* <div className='inf-scroll-right translate-x-[-100%]  flex flex-row'
                 style={{animationDirection: AnimateReverse ? "reverse" : "normal",
                     transform: AnimateReverse ? "translateY(100%)" : "translateY(-100%)"}}>
                {
                    scrollData.map((Data, index) => (<img key={Data.ProjectName + index}
                                                   className='h-[376px] hover:scale-105 mx-auto py-4 transition-all select-none'
                                                          src={Data.ProjectThumbnailImage} alt={"AnimateIMG"}/>))
                }
            </div>*/}
        </div>
    );
}