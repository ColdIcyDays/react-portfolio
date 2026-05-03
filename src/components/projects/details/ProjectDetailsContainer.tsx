import type {ProjectData} from "../../../json-interfaces/projects.tsx";
import {Link} from "react-router-dom";

export function ProjectDetailsContainer({ someProjectData } : { someProjectData: ProjectData }) {
    return (
      <div className='max-h-max w-auto grow flex flex-col'>
          <div className='reg-top-titlediv'>
            <h1 className='reg-top-titlediv-text text-6xl xl:text-8xl'>{someProjectData.ProjectName}</h1>
          </div>

          {/* TODO: This will break as soon as my description goes out of bounds. I'm running of time so
                    leaving this in a slighty broken state. Sorry!*/}
          <div className='flex flex-col xl:grid xl:grid-cols-2'>
              <div className='xl:ml-12 mt-8 mr-8 w-full xl:w-[90%] h-full'>
                  {/*<div className='min-h-[48px] max-h-[48px]'/>*/}
                  <div className='reg-30-div p-12 h-full'>
                      <p className='text-2xl'>{someProjectData.LongProjectDesc}</p>
                  </div>
              </div>
              <div className='grow'>

                  <div className='w-full xl:hidden mb-4 flex flex-row justify-center gap-4'>
                      <Link to={someProjectData.ProjectWebpage} target={"_blank"} rel='noopener noreferrer'>
                          <button className='block std-button m-auto mt-12'>Go to project</button>
                      </Link>

                      {/*<Link to={someProjectData.ProjectWebpage} target={"_blank"} rel='noopener noreferrer'>
                          <button className='block std-button m-auto mt-12'>Go to Github</button>
                      </Link>*/}
                  </div>

                  <div>
                      <img className='reg-10-img w-1/2 aspect-square m-auto xl:mt-12 mb-6' src={"/"+ someProjectData.ProjectFullImage}/>
                  </div>

                  <div className='w-full hidden xl:block'>
                      <Link to={someProjectData.ProjectWebpage} target={"_blank"} rel='noopener noreferrer'>
                        <button className='block std-button m-auto mb-12'>Go to project</button>
                      </Link>
                  </div>
              </div>


          </div>

      </div>
    );
}