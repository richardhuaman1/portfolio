export const LAYOUT_SIZES = {
  navbar: 72,
  footer: 52,
};

export const LAYOUT_TOTAL_HEIGHT = LAYOUT_SIZES.navbar + LAYOUT_SIZES.footer;

export const SECTIONS = {
  home: 'Home',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
} as const;

export const SECTION_KEYS = Object.values(SECTIONS);
