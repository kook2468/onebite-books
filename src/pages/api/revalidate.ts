import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/"); //인덱스 페이지를 재생성시킬거임
    return res.json({ revalidation: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Revalidation Failed");
  }
}
