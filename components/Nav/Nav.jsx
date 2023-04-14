import style from "./Nav.module.css";
import Link from "next/link";

export default function Nav () {
    return(
        <>
        <div className={style.nav}>
            <Link href="@/components/Nav/Nav#about"> About </Link>
            <Link href="@/components/Nav/Nav#projects"> Projects </Link>
            <Link href="@/components/Nav/Nav#contact"> Contact </Link>
        </div>
        </>
    )
}
