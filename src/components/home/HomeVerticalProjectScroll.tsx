import type {ProjectData} from "../../json-interfaces/projects.tsx";
import {useState} from "react";


export function HomeVerticalProjectScroll({ DataToScroll } : { DataToScroll: ProjectData[] })
{

    const [scrollData, setScrollData] = useState<ProjectData[]>([]);

    if (scrollData.length === 0)
    {
        console.log("List Set data...");

        const duplicatedData = [...DataToScroll, ...DataToScroll];

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
        <div className='h-[1024px] w-full mx-auto flex flex-col overflow-hidden inf-scroll-container'>
            <div className='inf-scroll translate-y-[-100%]'>
                {
                    scrollData.map((Data, index) => (<img key={Data.ProjectName + index}
                                                     className='max-w-[256px] mx-auto py-8 transition-all select-none' src={Data.ProjectThumbnailImage} alt={"TEST"}/>))
                }
            </div>
            <div className='inf-scroll translate-y-[-100%]'>
                {
                    scrollData.map((Data, index) => (<img key={Data.ProjectName + index}
                                                   className='max-w-[256px] mx-auto py-8 transition-all select-none' src={Data.ProjectThumbnailImage} alt={"TEST"}/>))
                }
            </div>
        </div>
    );
}