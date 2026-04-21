import type {ProjectData} from '../../json-interfaces/projects.tsx';
import type {CategoryData} from '../../json-interfaces/projects.tsx';
import {ProjectsListJSONParser} from "./ProjectsListJSONParser.tsx";

export class ProjectDataLoader
{
    #JSONParser: ProjectsListJSONParser = new ProjectsListJSONParser();

    GetAllProjectCategories(): ProjectData[] {
        return this.#JSONParser.GetAllProjectCategories();
    }

    GetProjectCategory(aCategory: string | undefined): ProjectData | undefined
    {
        if (aCategory !== undefined)
        {
            return this.#JSONParser.GetProjectCategory(aCategory);
        }
        return undefined;
    }

    IsValidCategory(aCategory: string | undefined): boolean
    {
        if (aCategory !== undefined)
        {
            return this.#JSONParser.IsValidCategory(aCategory);
        }

        return false;
    }

    GetProjectCategoryData(aCategory: string | undefined): CategoryData[] | undefined
    {
        if (aCategory !== undefined)
        {
            return this.#JSONParser.GetProjectCategoryData(aCategory);

        }

        return undefined;
    }
}