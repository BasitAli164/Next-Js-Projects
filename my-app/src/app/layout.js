import './globals.css'
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Mountain Travels  Pakistan" content="This is the best site to reach mountain travelers"/>
        <link></link>
        <title>Mountain Travels Agency</title>
      </head>
      <body>
        <Header/> 
        {children}
        <Footer/>
      
      </body>
    </html>
  );
}
