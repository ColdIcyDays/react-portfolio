import type {CategoryData} from '../../json-interfaces/projects.tsx';
import type {ProjectData} from '../../json-interfaces/projects.tsx';
import {ProjectsListJSONParser} from "./ProjectsListJSONParser.tsx";

export class ProjectDataLoader
{
    #JSONParser: ProjectsListJSONParser = new ProjectsListJSONParser();

    GetAllProjectCategories(): CategoryData[] {
        return this.#JSONParser.GetAllProjectCategories();
    }

    GetProjectCategory(aCategory: string | undefined): CategoryData | undefined
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

    GetProjectCategoryData(aCategory: string | undefined): ProjectData[] | undefined
    {
        if (aCategory !== undefined)
        {
            return this.#JSONParser.GetProjectCategoryData(aCategory);

        }

        return undefined;
    }

    GetAllProjectData() : ProjectData[] | undefined
    {
        console.log("Amount of data: " + this.#JSONParser.LoadedJSONData.length)
        let data: ProjectData[] = [];
        for (let i = 0; i < this.#JSONParser.LoadedJSONData.length; i++)
        {
            //data.concat(this.#JSONParser.LoadedJSONData[i].Data);
            for (let y = 0; y < this.#JSONParser.LoadedJSONData[i].Data.length; y++) {
                data.push(this.#JSONParser.LoadedJSONData[i].Data[y])
            }
        }

        return data;
    }
}