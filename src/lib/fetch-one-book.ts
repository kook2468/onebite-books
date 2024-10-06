import { BookData } from "@/types";

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  //BookData나 null값이 반환된다.
  const url = `https://onebite-books-server-nine-pi.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
