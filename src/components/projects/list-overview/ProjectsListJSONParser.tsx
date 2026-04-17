import testData from "../../../TestData/json/ProjectsData.json"
import type {ProjectData} from '../../../json-interfaces/projects.tsx';
import type {CategoryData} from '../../../json-interfaces/projects.tsx';

export class ProjectsListJSONParser
{
    LoadedJSONData: ProjectData[] = [];
    constructor() {
        this.LoadedJSONData = JSON.parse(JSON.stringify(testData));
    }

    IsValidCategory(aCategory: string): boolean
    {
        return this.GetProjectCategoryData(aCategory) != undefined;
    }

    GetProjectCategory(aCategory: string): ProjectData | undefined
    {
        for (let i = 0; i < this.LoadedJSONData.length; i++)
        {
            if (this.LoadedJSONData[i].CategoryName == aCategory)
            {
                return this.LoadedJSONData[i];
            }
        }

        return undefined;
    }

    GetProjectCategoryData(aCategory: string): CategoryData[] | undefined
    {
        let project: ProjectData | undefined = this.GetProjectCategory(aCategory);

        return project != undefined ? project.Data : undefined;
    }
}