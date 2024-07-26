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
      crunchyroll: import.meta.env.VITE_PROJECT_CRUNCHYROLL_CLONE_URL as string,
      portfolioApp: import.meta.env.VITE_PROJECT_PORTFOLIO_APP as string,
      ecommerceTgd: import.meta.env.VITE_PROJECT_ECOMMERCE_TGD as string,
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
