import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
   <html lang="en">
     <head>
       <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
     </head>
     <body>
      <Navbar/>
       {children}
       <Footer/>
     </body>
    </html>
  )
}
