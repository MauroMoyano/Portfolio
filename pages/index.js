import Image from 'next/image'
import Nav from "../components/Nav/Nav"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const text = "Mauro Crea su portfolio para poder mostrar sus habilidades en ciertas tecnologias."
  const description = "Soy un Full Stack Developer con más de 10 años de experiencia en trabajos técnicos en máquinas de casino, PC y celulares, así como también en el sector turístico y la impresión 3D. He liderado equipos y me he adaptado a cambios en situaciones diversas, lo que me ha ayudado a desarrollar habilidades de análisis y comunicación efectiva. En mi último rol como Full Stack Henry Assistant en Henry Bootcamp, he liderado y capacitado a grupos de Teaching Assistants para garantizar una experiencia educativa de alta calidad. Mis habilidades técnicas incluyen el uso de metodologías ágiles, SCRUM, GIT, JavaScript, React, Next, Redux, Node, Express, Sequelize, HTML, CSS, PostgreSQL, y otras herramientas. Durante mi tiempo en Henry Bootcamp, también he tenido la oportunidad de trabajar en varios proyectos de desarrollo web, incluyendo una aplicación de recetas y una plataforma de crowdfunding. En ambos proyectos, he utilizado una combinación de tecnologías front-end y back-end para desarrollar funcionalidades clave como autenticación, búsquedas, filtrados, ordenamientos, y más. Sigo buscando oportunidades para desafiarme y crecer profesionalmente, y me encantaría trabajar en proyectos emocionantes y colaborar con equipos talentosos. Si está interesado en saber más acerca de mi experiencia o proyectos, ¡por favor no dude en ponerse en contacto conmigo!"
  const caracteres = text.length // type number, this for CSS.

  return (
    <>
      <title>MauroMoyanoDev</title>
      <div>
        <Nav />
      </div>
    <span>
    <h1>{text}</h1>
    </span>
    <div>
      <p>{description}</p>
    </div>
    </>
  )
}
