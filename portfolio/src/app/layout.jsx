import "./globals.css";


export const metadata = {
  title: "Basit's Portfolio",
  description: "This Protfolio made in next js framework ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
