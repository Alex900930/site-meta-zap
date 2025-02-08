"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const whatsappNumber = "5585989329627"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre o Meta Zap Pro."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-1"></div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Revolucione seu
              <span className="bg-gradient-to-r from-brand to-red-500 text-transparent bg-clip-text">
                {" "}
                Atendimento
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Automatize, gerencie e potencialize seu atendimento no WhatsApp com inteligência e eficiência.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-brand hover:bg-brand/90 text-white px-8 py-6 text-lg rounded-full 
                    transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand/50
                    flex items-center gap-2 min-w-[200px] justify-center group"
                >
                  <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Começar Agora
                </Button>
              </Link>
              
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 
                    px-8 py-6 text-lg rounded-full transition-all duration-300 min-w-[200px]"
                >
                  Ver Demo
                </Button>
              </Link>
            </motion.div>

            {/* Estadísticas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">98%</h3>
                <p className="text-gray-400">Satisfação</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">2x</h3>
                <p className="text-gray-400">Mais Vendas</p>
              </div>
              <div className="text-center hidden md:block">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-400">Suporte</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-400 mb-4">Descubra Mais</p>
            <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center p-2">
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 rounded-full bg-gray-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

