import type {ProjectData} from "../../json-interfaces/projects.tsx";

export function ProjectCategoryImageComponent({ someCategoryData }: { someCategoryData: ProjectData }) {
    return (
        <div className='max-w-77 max-h-77 shrink-0'>
            <div className='h-full w-full group/projectHovered'>
                <img className='reg-10-img ring-clr-10-1/50 object-cover w-77 h-77 group-hover/projectHovered:h-55' src={someCategoryData.ProjectImage}/>

                <div className='w-full hidden group-hover/projectHovered:block justify-evenly'>
                    <button className='std-button w-[96px] self-start'>Details</button>
                    <button className='std-button w-[96px] self-end'>Link</button>
                </div>
            </div>
        </div>
    );
}