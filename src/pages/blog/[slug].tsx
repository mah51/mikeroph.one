import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '@/Components/MDXComponents';
import BlogLayout from '@/Components/BlogLayout';
import { getFileBySlug, getFiles } from '../../../utils/mdx';

export default function Blog({ mdxSource, frontMatter }: any) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles(`blog`);

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ``),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = await getFileBySlug(`blog`, params.slug);

  return { props: { ...post } };
}
