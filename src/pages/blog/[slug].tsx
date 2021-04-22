import MDXComponents from '@/Components/MDXComponents';
import hydrate from 'next-mdx-remote/hydrate';
import BlogLayout from '@/Components/BlogLayout';
import { getFileBySlug, getFiles } from '../../../utils/mdx';

export default function Blog({ mdxSource, frontMatter }: any) {
  const content = hydrate(mdxSource, {
    components: {
      ...MDXComponents,
    },
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
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
