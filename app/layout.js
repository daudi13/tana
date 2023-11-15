import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './globals.css'

export const metadata = {
  title: 'Tanatech',
  description: "We connect global companies to brilliant team members based on the continent of Africa – the world’s fastest-growing workforce.Let us handle sourcing, vetting, and training, so you can focus on growing.",
  image: "https://tanatech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnetwork.7383fd4d.png&w=1080&q=75",
  type: "website",
  url: "https://tanatech.vercel.app/",
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
