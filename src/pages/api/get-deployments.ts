import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const result = await fetch("https://api.vercel.com/v6/deployments", {
  "headers": {
    "Authorization": `Bearer ${process.env.VERCEL_TOKEN}`
  },
  "method": "get"
});
  const data = await result.json();
  res.status(200).json(data);
}