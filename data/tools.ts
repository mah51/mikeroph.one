export interface ToolType {
  link: string;
  image?: string;
  title: string;
  labels?: string[];
  date: Date;
}

const Tools: ToolType[] = [
  {
    link: `test.com`,
    labels: [`test`],
    title: `name`,
    date: new Date(`2020-12-13T03:24:00`),
  },
];
export default Tools;
