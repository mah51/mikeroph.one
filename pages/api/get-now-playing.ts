import { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '@/utils/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const { name } = song.item;
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(`, `);
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images
    .filter((image: any) => image.height > 109)
    .slice(-1)[0].url;
  const songUrl = song.item.external_urls.spotify;

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=60, stale-while-revalidate=30`
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    name,
  });
}
