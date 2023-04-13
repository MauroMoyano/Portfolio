import Link from "next/link";

export default function Nav () {
    return(
        <>
        <div ClassName="nav">
            <Link href="#about"> About </Link>
            <Link href="#projects"> Projects </Link>
            <Link href="#contact"> Contact </Link>
        </div>
        </>
    )
}