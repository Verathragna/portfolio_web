import "../styles/globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({ subsets: ["latin"] });
const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});

export const metadata = {
  title: "William Walker | Software Engineer",
  description: "Portfolio showcasing projects and skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-100`}>
        <CursorGlow />
        <main className="snap-container mx-auto max-w-6xl px-4 pb-10 lg:px-6">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}


