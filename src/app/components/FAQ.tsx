"use client"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona o Meta Zap Pro?",
      answer: "O Meta Zap Pro é uma plataforma web acessível de qualquer lugar do mundo. Basta acessar o site, fazer login com suas credenciais e começar a gerenciar seus atendimentos do WhatsApp de forma centralizada, com automação de respostas, organização de conversas e relatórios detalhados."
    },
    {
      question: "Preciso instalar algum aplicativo?",
      answer: "Não, o Meta Zap Pro é uma plataforma 100% web. Você só precisa de um navegador e conexão com internet para acessar todos os recursos através do nosso site."
    },
    {
      question: "Posso usar com WhatsApp normal?",
      answer: "Sim! O Meta Zap Pro é compatível tanto com WhatsApp normal quanto com WhatsApp Business, dando a você total flexibilidade para escolher qual versão usar."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Para clientes de Canindé, Ceará e região, oferecemos suporte técnico presencial de segunda a sexta, das 8:00 às 17:00. Para demais localidades, disponibilizamos suporte 100% online através de chat, email e WhatsApp, garantindo assistência eficiente independente da sua localização."
    },
    {
      question: "É seguro usar o Meta Zap Pro?",
      answer: "Sim, utilizamos tecnologia de ponta em segurança e criptografia para proteger todas as suas conversas e dados. Nossa plataforma segue os mais rigorosos padrões de segurança e privacidade."
    },
    {
      question: "Posso acessar de qualquer dispositivo?",
      answer: "Sim! Por ser uma plataforma web, você pode acessar o Meta Zap Pro de qualquer dispositivo (computador, tablet ou celular) que tenha um navegador e conexão com internet, mantendo todas suas conversas sincronizadas."
    }
  ]

  return (
    <section id="faq" className="py-24 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dúvidas
            <span className="bg-gradient-to-r from-brand to-red-500 text-transparent bg-clip-text">
              {" "}Frequentes
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Encontre respostas para as principais dúvidas sobre o Meta Zap Pro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white hover:text-brand transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-brand" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
