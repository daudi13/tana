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
     </head>
     <body>
      <Navbar/>
       {children}
       <Footer/>
     </body>
    </html>
  )
}
