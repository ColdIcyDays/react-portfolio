import {HomeVerticalProjectScroll} from "./HomeVerticalProjectScroll.tsx";
import {useState} from "react";
import {ProjectDataLoader} from "../projects/ProjectDataLoader.tsx";
import {HomeHorizontalProjectScroll} from "./HomeHorizontalProjectScroll.tsx";

export function HomeContainer() {
    const [dataLoader] = useState(new ProjectDataLoader());

    const loadedData = dataLoader.GetAllProjectData();

    return (
        <div className="min-h-dvh w-min grow flex flex-col">
            <div className='reg-top-titlediv'>
                <h1 className='reg-top-titlediv-text '>
                    Home
                </h1>
            </div>
            <div className='flex flex-col xl:flex-row grow'>

                    <div className='block xl:hidden mt-12'>
                        <HomeHorizontalProjectScroll DataToScroll={loadedData ? loadedData : []} AnimateReverse={false}/>
                    </div>

                    <div className='xl:ml-12 xl:w-min w-full xl:min-w-[512px] h-full flex flex-col'>
                            <div className="h-auto grow mt-12 bg-clr-30-1 rounded-sm ring-3 ring-clr-10-1">
                                <div className="m-auto w-max mt-[32px]">
                                    <h1 className="xl:text-[64px]/18 text-[56px]/18">Erik Ljungman</h1>
                                </div>

                                <div className="m-auto w-max mt-6 mb-6">
                                    <h2 className="xl:text-[32px] text-[24px]">Games and full-stack developer</h2>
                                </div>
                                <div className="w-full h-96 grid col-auto">

                                    <p className="pl-8 pr-8 ">
                                        My name is Erik Ljungman. I'm a new full-stack developer based in Malmö, Sweden.
                                        <br/> <br/>
                                        My background is in Game development, mainly in C++, but now I'm learning full-stack development at Lexicon.
                                        <br/> <br/>
                                    </p>
                                </div>
                            </div>

                    </div>

                <div className='w-full flex-row hidden  xl:flex'>
                    <div className='w-max ml-auto max-h-full'>
                        <HomeVerticalProjectScroll DataToScroll={loadedData ? loadedData : []} AnimateReverse={false}/>
                    </div>

                    <div className='hidden veryXL:block w-max max-h-full mx-auto'>
                        <HomeVerticalProjectScroll DataToScroll={loadedData ? loadedData : []} AnimateReverse={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

