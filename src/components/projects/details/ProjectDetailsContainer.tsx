import type {ProjectData} from "../../../json-interfaces/projects.tsx";
import {Link} from "react-router-dom";

export function ProjectDetailsContainer({ someProjectData } : { someProjectData: ProjectData }) {
    return (
      <div className='max-h-dvh w-auto grow flex flex-col'>
          <div className='reg-top-titlediv'>
            <h1 className='reg-top-titlediv-text'>{someProjectData.ProjectName}</h1>
          </div>

          {/* TODO: This will break as soon as my description goes out of bounds. I'm running of time so
                    leaving this in a slighty broken state. Sorry!*/}
          <div className='grid grid-cols-2 h-full overflow-hidden'>
              <div className='w-full h-full'>
                  {/*<div className='min-h-[48px] max-h-[48px]'/>*/}
                  <div className='reg-30-div ml-12 p-12 mt-8 h-full'>
                      <p className='text-2xl'>{someProjectData.LongProjectDesc}</p>
                  </div>
              </div>
              <div className='grow'>
                  <div>
                      <img className='reg-10-img max-h-[512px] m-auto mt-12 mb-6' src={"/"+ someProjectData.ProjectFullImage}/>

                  </div>

                  <div className='w-full'>
                      <Link to={someProjectData.ProjectWebpage} target={"_blank"} rel='noopener noreferrer'>
                        <button className='block std-button m-auto mb-12'>Go to project</button>
                      </Link>
                  </div>
              </div>


          </div>

      </div>
    );
}