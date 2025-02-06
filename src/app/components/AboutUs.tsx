"use client"
import { motion } from "framer-motion"
import { Check, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function AboutUs() {
  const logos = [
    '/images/logo11.jpeg',
    '/images/logo12.jpeg',
    '/images/logo13.jpeg',
    '/images/logo14.jpeg',
    '/images/logo15.jpeg',
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna de contenido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Transformando o
                <span className="bg-gradient-to-r from-brand to-red-500 text-transparent bg-clip-text">
                  {" "}Atendimento ao Cliente
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Meta Zap Pro é mais que uma ferramenta - é uma revolução no atendimento. 
                Nossa plataforma combina tecnologia avançada com simplicidade para 
                transformar a maneira como você se conecta com seus clientes.
              </p>
            </div>

            {/* Lista de beneficios */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                "Aumento de 300% na eficiência do atendimento",
                "Redução de 70% no tempo de resposta",
                "Satisfação do cliente superior a 98%",
                "Integração com múltiplos canais",
                "Suporte técnico especializado 24/7",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                className="bg-brand hover:bg-brand/90 text-white px-8 py-6 rounded-full
                  transition-all duration-300 transform hover:scale-105"
              >
                Começar Agora
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border-2 border-gray-700 text-white hover:bg-white/10
                  px-8 py-6 rounded-full transition-all duration-300"
              >
                Agendar Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Columna de video/demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-brand/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HaAtemh3Y1w"
                title="Meta Zap Pro Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Tarjetas de estadísticas flotantes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-gray-800 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-white font-semibold">Video Demo</p>
                  <p className="text-gray-400 text-sm">3 minutos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Sección de partners actualizada con carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 mb-12">Empresas que confiam em nós</p>
          
          {/* Carrusel de logos */}
          <div className="max-w-5xl mx-auto px-4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={2}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="partners-swiper"
            >
              {logos.concat(logos).map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-20 filter grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={logo}
                      alt={`Partner Logo ${index + 1}`}
                      width={150}
                      height={60}
                      className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>

      {/* Estilos adicionales para el carrusel */}
      <style jsx global>{`
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  )
}
  
  