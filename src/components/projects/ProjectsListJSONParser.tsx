import testData from "../../TestData/json/ProjectsData.json"
import type {CategoryData} from '../../json-interfaces/projects.tsx';
import type {ProjectData} from '../../json-interfaces/projects.tsx';

export class ProjectsListJSONParser
{
    LoadedJSONData: CategoryData[] = [];
    constructor() {
        this.LoadedJSONData = JSON.parse(JSON.stringify(testData));
    }

    GetAllProjectCategories(): CategoryData[] {
        return this.LoadedJSONData;
    }

    IsValidCategory(aCategory: string): boolean
    {
        return this.GetProjectCategoryData(aCategory) != undefined;
    }

    GetProjectCategory(aCategory: string): CategoryData | undefined
    {
        for (let i = 0; i < this.LoadedJSONData.length; i++)
        {
            if (this.LoadedJSONData[i].CategorySubpageDenotation == aCategory)
            {
                return this.LoadedJSONData[i];
            }
        }

        return undefined;
    }

    GetProjectCategoryData(aCategory: string): ProjectData[] | undefined
    {
        let project: CategoryData | undefined = this.GetProjectCategory(aCategory);

        return project != undefined ? project.Data : undefined;
    }
}