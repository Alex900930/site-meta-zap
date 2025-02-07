"use client"
import { Card } from "@/components/ui/card"
import { MessageSquare, BarChart2, Zap, Users, Bot, Shield, Clock, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Atendimento Integrado",
      description: "Centralize e gerencie seus atendimentos pelo WhatsApp de forma fácil e organizada.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Automação Inteligente",
      description: "Atenda seus clientes via WhatsApp com eficiência e praticidade.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Análise Avançada",
      description: "Transforme seu WhatsApp em uma poderosa ferramenta de atendimento.",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gestão de Equipe",
      description: "Organize suas conversas e otimize seu atendimento via WhatsApp.",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Total",
      description: "Acelere seu atendimento ao cliente com nosso gerenciador de WhatsApp.",
      gradient: "from-red-500 to-rose-400",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Agendamento Smart",
      description: "Um sistema completo para atendimento rápido e personalizado no WhatsApp.",
      gradient: "from-indigo-500 to-blue-400",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Respostas Rápidas",
      description: "Simplifique o atendimento ao cliente e aumente a satisfação pelo WhatsApp.",
      gradient: "from-pink-500 to-purple-400",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Personalização Total",
      description: "Gerencie todas as interações via WhatsApp em um só lugar.",
      gradient: "from-teal-500 to-green-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Veja o que você
            <span className="bg-gradient-to-r from-brand to-red-500 text-transparent bg-clip-text">
              {" "}vai receber
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Conheça todas as funcionalidades exclusivas que você terá acesso ao adquirir o Meta Zap Pro.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group bg-gray-800 border-gray-700 hover:border-gray-600 
                transition-all duration-300 hover:shadow-2xl hover:shadow-brand/20 p-6">
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} 
                    flex items-center justify-center text-white mb-4 transform group-hover:scale-110 
                    transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand 
                    transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-400">Empresas Atendidas</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">1M+</h3>
            <p className="text-gray-400">Mensagens/Mês</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-400">Suporte</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

