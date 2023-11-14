import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './globals.css'

export const metadata = {
  title: 'Tanatech',
  description: "We connect global companies to brilliant team members based on the continent of Africa – the world’s fastest-growing workforce.Let us handle sourcing, vetting, and training, so you can focus on growing.",
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
