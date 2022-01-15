import type { NextApiRequest, NextApiResponse } from 'next';
import vCardsJS from 'vcards-js';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const vCard = vCardsJS();
  vCard.firstName = 'Michael';
  vCard.lastName = 'Hall';
  vCard.email = 'michael.hall17@icloud.com';
  vCard.birthday = new Date(2000, 5, 12);
  vCard.photo.attachFromUrl(
    'https://michael-hall.me/static/images/profile.jpeg',
    'JPEG'
  );
  vCard.socialUrls['github'] = 'https://github.com/mah51';

  res.setHeader('Content-Type', 'text/vcard; name=vcard.vcf');
  res.setHeader('Content-Disposition', 'inline; filename=vcard.vcf');

  res.send(vCard.getFormattedString());
};

export default handler;
