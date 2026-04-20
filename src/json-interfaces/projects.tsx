export interface ProjectData
{
    CategorySubpageDenotation: string;
    CategoryTitle: string,
    CategoryCTA: string;
    Data: CategoryData[];
}

export interface CategoryData
{
    ProjectName: string;
    ProjectDesc: string;
    HasUniquePage: boolean;
    HTML_LongProjectDesc: string;
}