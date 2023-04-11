import Image from 'next/image'
import Nav from "../components/Nav"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const text = "Mauro Crea su portfolio para poder mostrar sus habilidades en ciertas tecnologias"
  const caracteres = text.length // type number, this for CSS

  return (
    <>
      <div>
        <Nav />
      </div>
    <span>
    <h1>{text}</h1>
    </span>
    </>
  )
}
