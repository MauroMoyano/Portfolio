import style from "./Nav.module.css";
import Link from "next/link";

export default function Nav () {
    return(
        <>
        <div className={style.nav}>
            <Link href="@/components/Nav/Nav#about" className={style.nav}> About </Link>
            <Link href="@/components/Nav/Nav#projects" className={style.nav}> Projects </Link>
            <Link href="@/components/Nav/Nav#contact" className={style.nav}> Contact </Link>
        </div>
        </>
    )
}
