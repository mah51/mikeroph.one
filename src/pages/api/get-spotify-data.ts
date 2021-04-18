import { NextApiRequest, NextApiResponse } from 'next';

import querystring from 'querystring';

const axios = require(`axios`);
const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
).toString(`base64`);
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === `GET`) {
    try {
      const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: `POST`,
        headers: {
          Authorization: `Basic ${basic}`,
          'Content-Type': `application/x-www-form-urlencoded`,
        },
        body: querystring.stringify({
          grant_type: `refresh_token`,
          refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
        }),
      });

      const { access_token } = await response.json();

      const { data: artists } = await axios.get(
        `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=3`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      const { data: songs } = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      const { data: recentlyPlayed } = await axios.get(
        `https://api.spotify.com/v1/me/player/recently-played?limit=10`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      const { data: currentlyPlaying } = await axios.get(
        `https://api.spotify.com/v1/me/player/currently-playing`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      res.setHeader(
        `Cache-Control`,
        `public, s-maxage=60, stale-while-revalidate=30`,
      );
      res
        .status(200)
        .json({ artists, songs, recentlyPlayed, currentlyPlaying });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      if (e.response.status === 429) {
        res
          .status(429)
          .json({ message: `you need to wait ${e.headers[`Retry-After`]}` });
      } else {
        res
          .status(500)
          .json({ message: `there was an error`, code: e.response.status });
      }
    }
  }
}

export default handler;
