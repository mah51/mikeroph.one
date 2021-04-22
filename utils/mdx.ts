import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from '@/Components/MDXComponents';

export const getFiles = (type: string) =>
  fs.readdirSync(path.join(process.cwd(), `data`, type));

export async function getFileBySlug(type: string, slug: number) {
  const source = slug
    ? fs.readFileSync(
        path.join(process.cwd(), `data`, type, `${slug}.mdx`),
        `utf8`,
      )
    : fs.readFileSync(path.join(process.cwd(), `data`, `${type}.mdx`), `utf8`);

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        // eslint-disable-next-line global-require
        require(`remark-autolink-headings`),
        // eslint-disable-next-line global-require
        require(`remark-slug`),
        // eslint-disable-next-line global-require
        require(`remark-code-titles`),
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(process.cwd(), `data`, type));

  return files.reduce((allPosts: any, postSlug: string) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), `data`, type, postSlug),
      `utf8`,
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(`.mdx`, ``),
      },
      ...allPosts,
    ];
  }, []);
}
