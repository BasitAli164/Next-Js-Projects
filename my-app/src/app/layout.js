import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-950" lang="en">
      <head>
        <title>Next js with Basit</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
