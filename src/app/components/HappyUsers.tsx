"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'

// Importa los estilos de Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function HappyUsers() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Gerente",
      company: "Farmácia Saúde Total",
      testimonial: "Com o Meta Zap Pro, nossa farmácia reduziu o tempo de resposta em 50%! Agora conseguimos atender o dobro de clientes com a mesma equipe.",
      rating: 5
    },
    {
      name: "Dr. Carlos Oliveira",
      role: "Diretor",
      company: "Clínica Bem Estar",
      testimonial: "Nossa clínica aumentou em 40% o número de agendamentos após implementar o Meta Zap Pro. A automação das confirmações reduziu as faltas em 60%!",
      rating: 5
    },
    {
      name: "Ana Lima",
      role: "Coordenadora",
      company: "Colégio Futuro",
      testimonial: "A comunicação com os pais melhorou significativamente! O Meta Zap Pro nos ajudou a manter todos informados e aumentou a participação nas reuniões escolares em 70%.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      role: "Proprietário",
      company: "Restaurante Sabor & Arte",
      testimonial: "Desde que implementamos o Meta Zap Pro, nossas reservas aumentaram 45% e o tempo de resposta para pedidos delivery caiu pela metade. Uma ferramenta essencial!",
      rating: 5
    },
    {
      name: "Patricia Alves",
      role: "Gerente Comercial",
      company: "Imobiliária Premium",
      testimonial: "O Meta Zap Pro transformou nosso atendimento! Conseguimos aumentar em 80% o número de visitas agendadas e melhoramos significativamente a taxa de fechamento.",
      rating: 5
    },
    {
      name: "Lucas Costa",
      role: "CEO",
      company: "Academia Vida Ativa",
      testimonial: "Com o Meta Zap Pro, automatizamos o acompanhamento dos alunos e reduzimos a evasão em 55%. A retenção de clientes nunca esteve tão alta!",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Clientes
            <span className="bg-gradient-to-r from-brand to-red-500 text-transparent bg-clip-text">
              {" "}Satisfeitos
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Descubra por que centenas de empresas escolheram o Meta Zap Pro para 
            revolucionar seu atendimento ao cliente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="testimonials-swiper !overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!w-[380px] sm:!w-[450px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-8 relative group hover:bg-gray-800/80 
                    transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Ícono de comillas */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-4 h-4 text-white" />
                  </div>

                  {/* Contenido */}
                  <div className="space-y-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed italic">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>

                    <div className="pt-4 border-t border-gray-700">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-brand">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Estilos personalizados para el carrusel */}
      <style jsx global>{`
        .testimonials-swiper {
          padding: 2rem 0 4rem !important;
        }
        .swiper-pagination-bullet {
          background: #666 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #b20000 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

