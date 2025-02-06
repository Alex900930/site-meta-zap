import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Meta Zap Pro - Gerenciamento de Atendimento ao Cliente",
  description:
    "Revolucione seu atendimento ao cliente com Meta Zap Pro. Integração avançada com WhatsApp para um serviço eficiente e personalizado.",
  icons: {
    icon: [
      { url: "/images/favicon.ico" }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#22c55e',
              },
            },
            error: {
              style: {
                background: '#ef4444',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}

