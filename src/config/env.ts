export function envConfig() {
  return {
    appUrl: process.env.APP_URL,
    nodeEnv: process.env.NODE_ENV,
    nodemailer: {
      email: process.env.NODE_MAILER_USER,
      password: process.env.MAILER_PASSWORD,
    },
    projectsUrl: {
      crunchyroll: process.env.PROJECT_CRUNCHYROLL_CLONE_URL,
      portfolioApp: process.env.PROJECT_PORTFOLIO_APP,
      ecommerceTgd: process.env.PROJECT_ECOMMERCE_TGD,
    },
    contact: {
      github: process.env.GITHUB_URL,
      linkedin: process.env.LINKEDIN_URL,
      email: process.env.CONTACT_EMAIL,
    },
  };
}
