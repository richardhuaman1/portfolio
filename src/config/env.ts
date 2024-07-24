export function envConfig() {
  return {
    appUrl: import.meta.env.VITE_APP_URL as string,
    nodeEnv: import.meta.env.VITE_NODE_ENV as string,
    nodemailer: {
      email: import.meta.env.VITE_NODE_MAILER_USER as string,
      password: import.meta.env.VITE_MAILER_PASSWORD as string,
    },
    projectsUrl: {
      crunchyroll: import.meta.env.VITE_PROJECT_CRUNCHYROLL_CLONE_URL as string,
      portfolioApp: import.meta.env.VITE_PROJECT_PORTFOLIO_APP as string,
      ecommerceTgd: import.meta.env.VITE_PROJECT_ECOMMERCE_TGD as string,
    },
    contact: {
      github: import.meta.env.VITE_GITHUB_URL as string,
      linkedin: import.meta.env.VITE_LINKEDIN_URL as string,
      email: import.meta.env.VITE_CONTACT_EMAIL as string,
    },
  };
}
