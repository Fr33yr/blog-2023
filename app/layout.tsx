import { Footer, Navigator } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agustin | Frontend developer",
  description:
    "Hello there welcome to my blog, where i share things i learn about tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        <Navigator />
        <main className="min-h-screen p-24 flex flex-col items-center bg-slate-200 dark:bg-slate-600">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
