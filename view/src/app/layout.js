import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter, Roboto_Mono } from 'next/font/google';
import HeaderExport from "@/component/header/headerExport";
import { Suspense } from 'react';
import Loading from "./loading";
import NavigateLoading from "@/component/preloader/navigateLoading";

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: "Dashboard by Avi Patel",
  description: "Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto_mono.className}`}>
        <Suspense fallback={<Loading />}>
        <NavigateLoading>
          <HeaderExport>
              {children}
          </HeaderExport>
          </NavigateLoading>
        </Suspense>
      </body>
    </html>
  );
}
