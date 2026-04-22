import type {ProjectData} from "../../../json-interfaces/projects.tsx";
import {Link} from "react-router-dom";

export function ProjectDetailsContainer({ someProjectData } : { someProjectData: ProjectData }) {
    return (
      <div className='min-h-dvh w-auto grow flex flex-col'>
          <div className='reg-top-titlediv'>
            <h1 className='reg-top-titlediv-text'>{someProjectData.ProjectName}</h1>
          </div>

          <div>
              <img className='reg-10-img max-h-[512px] m-auto mt-12 mb-12' src={"/"+ someProjectData.ProjectFullImage}/>

          </div>

          <div className='w-full'>
              <Link to={someProjectData.ProjectWebpage} target={"_blank"} rel='noopener noreferrer'>
                <button className='block std-button m-auto mb-12'>Go to project</button>
              </Link>
          </div>

          <div className='reg-30-div ml-12 bottom-0 grow p-12'>
              <p className='text-2xl'>{someProjectData.LongProjectDesc}</p>
          </div>

      </div>
    );
}