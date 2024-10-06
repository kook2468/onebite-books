import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `https://onebite-books-server-nine-pi.vercel.app/book`;
  if (q) url += `/search?q=${q}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json(); //json()메서드 역시 JSON 형태로 변환하는 작업을 비동기적으로 처리함
  } catch (err) {
    console.error(err);
    return [];
  }
}
