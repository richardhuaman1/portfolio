export type Experience = {
  companyName: string;
  from: string;
  to: string;
  position: string;
  description: string;
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
  image: string;
  animation: 'wiggle' | 'spin';
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

export type Icon = (_props: Record<string, any>) => any;
