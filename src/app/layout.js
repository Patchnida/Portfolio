import { Open_Sans } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer.js/footer";

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  // weight: ["300", "400", "600"],
});

export const metadata = {
  title: "Patchnida",
  description: "Patchnida's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
