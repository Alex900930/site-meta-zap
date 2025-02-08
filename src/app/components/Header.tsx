"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const whatsappNumber = "5585989329627"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre o Meta Zap Pro."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#services" },
    { name: "Sobre", href: "/#about" },
    { name: "Depoimentos", href: "/#testimonials" },
    { name: "Perguntas Frequentes", href: "/#faq" },
    { name: "Contato", href: "/#contact" },
  ]

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "py-2 bg-gray-900/95 backdrop-blur-md shadow-lg" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo con fondo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/#home" 
              onClick={scrollToTop}
              className="relative block bg-white rounded-lg p-2 hover:opacity-90 transition-opacity"
            >
              <div className="w-[120px] h-[30px] relative">
                <Image
                  src="/images/logo.81355e87.png"
                  alt="Meta Zap Pro Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Menú de escritorio */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={item.href === "#home" ? scrollToTop : undefined}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-brand hover:bg-brand/90 text-white px-6 py-2 rounded-full
                  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand/50"
              >
                Começar Agora
              </Button>
            </Link>
          </motion.div>

          {/* Botón de menú móvil */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="fixed left-0 right-0 top-[60px] px-4 pb-6 bg-gray-900 shadow-lg border-t border-gray-800">
                <div className="flex flex-col space-y-4 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false)
                        if (item.href === "#home") scrollToTop(e)
                      }}
                      className="text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-lg
                        hover:bg-white/10 active:bg-white/20"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button 
                        className="bg-brand hover:bg-brand/90 text-white mx-4 py-6 rounded-full
                        transition-all duration-300 mt-4"
                    >
                        Começar Agora
                    </Button>
                  </Link>
                 
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}