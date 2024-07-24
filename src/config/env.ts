export function envConfig() {
  return {
    appUrl: import.meta.env.VITE_APP_URL,
    nodeEnv: import.meta.env.VITE_NODE_ENV,
    nodemailer: {
      email: import.meta.env.VITE_NODE_MAILER_USER,
      password: import.meta.env.VITE_MAILER_PASSWORD,
    },
    projectsUrl: {
      crunchyroll: import.meta.env.VITE_PROJECT_CRUNCHYROLL_CLONE_URL,
      portfolioApp: import.meta.env.VITE_PROJECT_PORTFOLIO_APP,
      ecommerceTgd: import.meta.env.VITE_PROJECT_ECOMMERCE_TGD,
    },
    contact: {
      github: import.meta.env.VITE_GITHUB_URL,
      linkedin: import.meta.env.VITE_LINKEDIN_URL,
      email: import.meta.env.VITE_CONTACT_EMAIL,
    },
  };
}
