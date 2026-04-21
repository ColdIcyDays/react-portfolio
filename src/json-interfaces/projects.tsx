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
    ProjectImage: string;
    HasUniquePage: boolean;
    HTML_LongProjectDesc: string;
}