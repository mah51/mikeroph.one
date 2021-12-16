import { NextApiRequest, NextApiResponse } from 'next';

import { getSpotifyData } from '@/utils/spotify';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === `GET`) {
    try {
      const { responseTracks, responseArtists, responseRecently } =
        await getSpotifyData();

      if (responseRecently.status !== 200) {
        return res
          .status(responseRecently.status)
          .json({ error: `there was an error` });
      }

      if (responseArtists.status !== 200) {
        return res
          .status(responseArtists.status)
          .json({ error: `there was an error` });
      }
      if (responseTracks.status !== 200) {
        return res
          .status(responseTracks.status)
          .json({ error: `there was an error` });
      }

      const artists = await responseArtists.json();
      const songs = await responseTracks.json();
      const recentlyPlayed = await responseRecently.json();

      res.setHeader(
        `Cache-Control`,
        `public, s-maxage=60, stale-while-revalidate=60`
      );

      return res.status(200).json({ artists, songs, recentlyPlayed });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      if (e.response.status === 429) {
        return res
          .status(429)
          .json({ message: `you need to wait ${e.headers[`Retry-After`]}` });
      }
      return res
        .status(500)
        .json({ message: `there was an error`, code: e.response.status });
    }
  } else {
    return res.status(405).json({ error: `Method not allowed` });
  }
}

export default handler;
