import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <div>존재하지 않는 페이지입니다.</div>
    </>
  );
};

export default Page;
