export interface CategoryData
{
    CategorySubpageDenotation: string;
    CategoryTitle: string;
    CategoryImage: string;
    CategoryCTA: string;
    CategoryDescription: string;
    Data: ProjectData[];
}

export interface ProjectData
{
    ProjectName: string;
    ProjectDesc: string;
    ProjectThumbnailImage: string;
    ProjectFullImage: string;
    ProjectWebpage: string;
    HasUniquePage: boolean;
    LongProjectDesc: string;
}