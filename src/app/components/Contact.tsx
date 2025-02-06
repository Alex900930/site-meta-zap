"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import toast from 'react-hot-toast'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('/api/save-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save contact')
      }

      toast.success('Mensagem recebida com sucesso! Entraremos em contato em breve.')
      form.reset()
    } catch (error) {
      console.error('Error:', error)
      toast.error('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 mb-8">
            Deixe seu email e mensagem, entraremos em contato em breve.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 text-left"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Sua mensagem"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full md:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-3"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

