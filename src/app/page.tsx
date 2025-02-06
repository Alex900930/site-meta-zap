import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import HappyUsers from "./components/HappyUsers"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <Services />
        <AboutUs />
        <HappyUsers />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

