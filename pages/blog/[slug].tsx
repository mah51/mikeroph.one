import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/components/MDXComponents';
import BlogLayout from '@/components/BlogLayout';
import { getFileBySlug, getFiles } from '@/utils/mdx';

export default function Blog({
  mdxSource,
  frontMatter,
}: {
  mdxSource: any;
  frontMatter: any;
}): React.ReactElement {
  if (frontMatter.published || !process.env.VERCEL_ENV) {
    return (
      <BlogLayout frontMatter={frontMatter}>
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </BlogLayout>
    );
  }
}

export async function getStaticPaths(): Promise<any> {
  const posts = await getFiles(`blog`);

  return {
    paths: posts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ``),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }): Promise<any> {
  const post = await getFileBySlug(`blog`, params.slug);

  return { props: { ...post } };
}
