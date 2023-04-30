import style from "./Nav.module.css";
import Link from "next/link";

export default function Nav () {
    return(
        <>
        <div className={style.nav}>
            <Link href="#" className={style.nav}> About </Link>
            <Link href="#" className={style.nav}> Projects </Link>
            <Link href="#" className={style.nav}> Contact </Link>
        </div>
        </>
    )
}
