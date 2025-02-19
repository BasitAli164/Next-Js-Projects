// import type { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" dark:bg-black dark:text-white">
        <div className="container mx-auto p-12">
        {children}

        </div>
      </body>
    </html>
  );
}
