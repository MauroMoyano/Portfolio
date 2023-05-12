import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/projects";
import { Inter } from "next/font/google";
import Skills from "@/components/Skills/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const text =
    "Mauro Crea su portfolio para poder mostrar sus habilidades en ciertas tecnologias. ";
  const caracteres = text.length; // type number, this for CSS.

  return (
    <>
      <title>MauroMoyanoDev</title>
      <header  className="bg-auto bg-blue-300">
        <div>
          <h1>Mauro Moyano</h1>
          <p>Full Stack Web Developer</p>
        </div>
        <Nav />
      </header>
      <div className="bg-auto bg-slate-500">
        <Projects />
        <h1>{text}</h1>
      </div>
      <div className="bg-auto bg-zinc-900">
        <Skills />
      </div>
      <div className="bg-auto bg-slate-500">
        <About />
      </div>
      <div className="bg-auto bg-zinc-900">
      <Contact />
      </div>
      <div className="bg-auto bg-slate-500">
      <Footer />
      </div>
    </>
  );
}
