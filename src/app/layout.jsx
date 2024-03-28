import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from './page.module.css'
import ThemeContextProvider from "@/context/themeContext";
import AuthSessionProvider from "@/components/authProvider";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "NextApp",
  description: "A general application built for learning nextjs 14",

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <ThemeContextProvider>
          <AuthSessionProvider>
            <Navbar />
              <div className={styles.pageContainer}>
                {children}
              </div>
            <Footer />
          </AuthSessionProvider>
        </ThemeContextProvider>
        </body>
    </html>
  );
}
