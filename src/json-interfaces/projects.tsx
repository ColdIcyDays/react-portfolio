export interface ProjectData
{
    CategorySubpageDenotation: string;
    CategoryTitle: string,
    CategoryImage: string,
    CategoryCTA: string;
    CategoryDescription: string;
    Data: CategoryData[];
}

export interface CategoryData
{
    ProjectName: string;
    ProjectDesc: string;
    HasUniquePage: boolean;
    HTML_LongProjectDesc: string;
}