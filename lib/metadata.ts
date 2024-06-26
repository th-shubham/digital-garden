import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Shubham Jangid",
  handle: "@th-shubham",
  socialProfiles,
  email: "shubham0jangid@gmail.com",
  website: "@",
  jobTitle: "Salesforce Developer",
  company: "Astonous",
  availableForWork: true,
  location: {
    city: "Jaipur, India",
    media: "/jaipur.png",
  },
};

const defaultTitle = `Shubham Jangid`;
// const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `Building tools for DX 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "",
  newsletterProvider: "",
  newsletterUrl: "",
  analyticsProvider: "",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
