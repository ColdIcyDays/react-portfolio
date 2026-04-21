import type {ProjectData} from "../../json-interfaces/projects.tsx";

export function ProjectCategoryImageComponent({ someCategoryData }: { someCategoryData: ProjectData }) {
    return (
        <div className='max-w-77 max-h-77 shrink-0'>
            <img src={someCategoryData.ProjectImage}/>
        </div>
    );
}