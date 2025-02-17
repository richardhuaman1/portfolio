export type Experience = {
  companyName: string;
  from: string;
  to: string;
  position: string;
  roles: string[];
  technologies: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: TechnologyTag[];
  repositoryUrl: string | null;
  previewUrl: string | null;
  screenshotsDir?: string;
};

export type Technology = {
  name: string;
  icon: Icon;
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

export type EnvironmentMode = 'development' | 'production';
