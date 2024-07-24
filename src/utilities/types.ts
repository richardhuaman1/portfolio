export type Experience = {
  companyName: string;
  from: string;
  to: string;
  position: string;
  logo: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: TechnologyTag[];
  repositoryUrl: string | null;
  previewUrl: string | null;
};

export type Technology = {
  name: string;
  color: string;
};

export interface TechnologyTag {
  name: string;
  color: string;
}

export type Timeline = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
};
