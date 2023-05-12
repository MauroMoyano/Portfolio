import style from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div>
        <h1>Mauro Moyano</h1>
        <p>Full Stack Web Developer</p>
      </div>
      <form action="">
        <input type="text" id="barra-busqueda" placeholder="Buscar"></input>
      </form>
      <div className={style.nav}>
        <Link href="#about" className={style.nav}>
          {" "}
          About{" "}
        </Link>
        <Link href="#projects" className={style.nav}>
          {" "}
          Projects{" "}
        </Link>
        <Link href="#contact" className={style.nav}>
          {" "}
          Contact{" "}
        </Link>
      </div>
    </>
  );
}
