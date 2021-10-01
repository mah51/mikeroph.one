import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from '@mapbox/rehype-prism';
import remark from 'remark-slug';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkCodeTitles from 'remark-code-titles';

export const getFiles = (type: string): string[] =>
  fs.readdirSync(path.join(process.cwd(), `data`, type));

export async function getFileBySlug(type: string, slug: number): Promise<any> {
  const source = slug
    ? fs.readFileSync(
        path.join(process.cwd(), `data`, type, `${slug}.mdx`),
        `utf8`
      )
    : fs.readFileSync(path.join(process.cwd(), `data`, `${type}.mdx`), `utf8`);

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remark, [remarkAutoLinkHeadings], remarkCodeTitles],
      rehypePlugins: [mdxPrism],
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

export async function getAllFilesFrontMatter(): Promise<any> {
  const files = fs.readdirSync(path.join(process.cwd(), `data`, `blog`));

  return files.reduce((allPosts: any, postSlug: string) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), `data`, `blog`, postSlug),
      `utf8`
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

export interface frontMatterType {
  title: string;
  publishedAt: string;
  summary: string;
  tags?: string[];
  image: string;
  by: {
    name: string;
    avatar: string;
  };
  readingTime?: {
    text: string;
  };
  wordCount: number;
  slug: string | null;
}
