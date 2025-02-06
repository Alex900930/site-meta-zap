import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json()
    const date = new Date().toISOString()
    
    const csvLine = `${date},${email},"${message.replace(/"/g, '""')}"\n`
    const filePath = path.join(process.cwd(), 'data', 'contacts.csv')
    
    // Crear el directorio si no existe
    const dir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    
    // Crear el archivo con encabezados si no existe
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, 'Date,Email,Message\n')
    }
    
    // Agregar el nuevo contacto
    fs.appendFileSync(filePath, csvLine)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    )
  }
} 