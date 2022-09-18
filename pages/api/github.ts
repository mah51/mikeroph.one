import { NextApiResponse, NextApiRequest } from 'next';

export interface repoType {
  id: string;
  name: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  description: string;
  stargazers_count: number;
  fork: boolean;
}

const excludedRepoNames = [
  'protein-links',
  'mah51',
  'create-typescript-component',
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const userResponse = await fetch(`https://api.github.com/users/mah51`);
  const userReposResponse = await fetch(
    `https://api.github.com/users/mah51/repos?per_page=100`
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const notForked = repositories.filter(
    (repo: any) => !repo.fork && !excludedRepoNames.includes(repo.name)
  );

  const stars =
    notForked.reduce(
      (a: number, r: { stargazers_count: number }) => a + r.stargazers_count,
      0
    ) || null;

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=1200, stale-while-revalidate=600`
  );

  const sendRepos = notForked.map(
    ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    }: repoType) => ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    })
  );
  return res.status(200).json({
    followers: user.followers,
    repos: sendRepos,
    stars,
  });
}
