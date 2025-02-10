"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-center mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Meta Zap Pro!</span>{" "}
                <span className="text-white">Centralize Tudo.</span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Venda Mais.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 text-center max-w-2xl mb-8 font-medium"
                >
                Transforme seu WhatsApp em uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold">central de atendimento profissional</span>. Organize, automatize e aumente suas vendas em um só lugar.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-brand hover:bg-brand/90 text-white px-4 sm:px-14 py-6 text-lg rounded-full 
                    transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand/50
                    flex items-center gap-2 justify-center group"
                >
                  <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Garantir Minha Demonstração Grátis
                </Button>
              </Link>
              
              <div className="text-gray-400 text-sm px-4 py-2 bg-gray-800/50 rounded-lg">
                🔥 Últimas 5 vagas para demonstração esta semana
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center justify-center gap-2 mt-4"
            >
              <div className="flex -space-x-2">
                {[11, 12, 13, 14].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-black">
                    <Image 
                      src={`/images/logo${i}.jpeg`} 
                      alt={`Logo empresa ${i}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                +150 empresas demonstraram interesse esta semana
              </p>
            </motion.div>

            {/* Estadísticas */}
           {/*  <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto mb-14 sm:mb-2"
            >
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">98%</h3>
                <p className="text-gray-400">Satisfação dos Clientes</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">300%</h3>
                <p className="text-gray-400">Aumento em Vendas</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-400">Suporte Dedicado</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">500+</h3>
                <p className="text-gray-400">Clientes Ativos</p>
              </div>
            </motion.div> */}
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

