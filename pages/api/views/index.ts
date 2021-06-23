import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/utils/firebase'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const snapshot = await db.ref('views').once('value')
  const views = snapshot.val()
  const allViews = Object.values(views).reduce((total: any, value: any) => total + value)

  return res.status(200).json({ total: allViews })
}
