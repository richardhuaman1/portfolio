import type { TechnologyTag } from './tags';

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: TechnologyTag[];
  repositoryUrl: string | null;
  previewUrl: string | null;
};
