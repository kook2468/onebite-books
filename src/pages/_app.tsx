import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  //타입 확장
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page); //getLayout이 undefined일때 뒤에 있는 함수가 저장됨
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
