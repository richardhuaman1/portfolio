import type { EnvironmentMode } from '@/utilities/types';

export class EnvService {
  static mode() {
    return process.env.NODE_ENV as EnvironmentMode;
  }

  static getClient() {
    return import.meta.env.VITE_APP_URL as string;
  }

  static getProjects() {
    return {
      crunchyroll: {
        demo: import.meta.env.VITE_PROJECT_CRUNCHYROLL_CLONE_URL as string,
        url: import.meta.env.VITE_PROJECT_CRUNCHYROLL_CLONE_URL_REPOSITORY as string,
      },
      portfolioApp: {
        demo: import.meta.env.VITE_PROJECT_PORTFOLIO_APP as string,
        url: import.meta.env.VITE_PROJECT_PORTFOLIO_APP_REPOSITORY as string,
      },
      queueApp: {
        demo: import.meta.env.VITE_PROJECT_QUEUE_MANAGEMENT as string,
        url: null,
      },
    };
  }

  static getContact() {
    return {
      github: import.meta.env.VITE_GITHUB_URL as string,
      linkedin: import.meta.env.VITE_LINKEDIN_URL as string,
      email: import.meta.env.VITE_CONTACT_EMAIL as string,
    };
  }
}
