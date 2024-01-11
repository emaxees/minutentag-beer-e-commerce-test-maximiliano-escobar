import { DM_Sans } from "next/font/google";
import "./globals.css";
import styles from './layout.module.css';

const DMSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${styles.root} ${DMSans.className}`}>{children}</body>
    </html>
  );
}
