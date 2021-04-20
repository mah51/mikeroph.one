export interface LinkType {
  link: string;
  id: string;
  name: string;
  label?: string;
  date: Date;
}

export const links: LinkType[] = [
  {
    id: `nextjs`,
    link: `https://nextjs.org/`,
    name: `Next.JS`,
    label: `Web Development`,
    date: new Date(`2021-04-20T01:44`),
  },
  {
    id: `chakra-ui`,
    link: `https://chakra-ui.com/`,
    name: `Chakra-UI`,
    label: `Web Development`,
    date: new Date(`2021-04-20T03:44`),
  },
];

export default links;
