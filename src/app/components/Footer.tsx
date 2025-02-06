"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Columna 1: Sobre nosotros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Meta Zap Pro</h3>
            <p className="text-gray-400 leading-relaxed">
              Revolucionando o atendimento ao cliente através de soluções 
              inteligentes e integradas com o WhatsApp.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-brand transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-brand transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-brand transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Columna 2: Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="hover:text-brand transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-brand transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-brand transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-brand transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-brand transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3: Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand" />
                <Link href="https://wa.me/5585989329627" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand transition-colors">
                  +55 85 98932-9627
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand" />
                <a href="mailto:contato@metazappro.com" 
                  className="hover:text-brand transition-colors">
                  alessander@metazappro.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand flex-shrink-0" />
                <span>Canindé, Ceará<br />Brasil</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <p className="text-sm text-gray-400">
                © {currentYear} Meta Zap Pro. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-brand transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-brand transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

