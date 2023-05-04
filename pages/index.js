import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import Projects from '../components/Projects/projects'
import { Inter } from 'next/font/google'
import Skills from "@/components/Skills/Skills"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const text = "Mauro Crea su portfolio para poder mostrar sus habilidades en ciertas tecnologias."
  const caracteres = text.length // type number, this for CSS.

  return (
    <> 
      <title>MauroMoyanoDev</title>
      <header calss="">
        <div>
          <h1>Mauro Moyano</h1>
          <p>Full Stack Web Developer</p>
        </div>
      <Nav />
</header>
    <div>
      <Projects />
    <h1>{text}</h1>
    </div>
    <div>
    </div>
    
    <Skills />
    <About />
    <Contact />
    <Footer />
    </>
  )
}
