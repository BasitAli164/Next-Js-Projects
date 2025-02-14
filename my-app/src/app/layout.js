import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: '900',

})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Next js with Basit</title>
      </head>
      <body >{children}
        <p>loreasdfjksadj kjdfkjdsa kdjsafkj</p>
      </body>
    </html>
  );
}
