import { CustomLink, CustomTitle, CustomText } from './Basic';

const titles: any = {};
new Array(6).fill('').forEach((x, i) => {
  titles['h' + (i + 1).toString()] = CustomTitle;
});

const MDXComponents = {
  a: CustomLink,
  p: CustomText,
  ...titles,
};

export default MDXComponents;
