import type { AppProps } from "next/app";

import "@/styles/globals.scss";
import localFont from "next/font/local";
import { Crimson_Pro } from "next/font/google";

import store from "@/store";
import { Provider } from "react-redux";

const fonts = localFont({
  src: [
    {
      path: "./../fonts/normal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../fonts/semibold.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../fonts/bold.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

const crimson = Crimson_Pro({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={fonts.className}>
        <style jsx global>
          {`
            html {
              --serif-font: ${crimson.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
