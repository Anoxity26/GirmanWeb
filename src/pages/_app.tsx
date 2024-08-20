import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Head from "next/head";

// If loading a variable font, you don't need to specify the font weight
const PoppinsFont = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={PoppinsFont.className}>
      <Head>
        <link rel="icon" href="/icon.png" className="h-[16px] w-[16px]" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
