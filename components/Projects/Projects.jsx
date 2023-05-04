import Image from "next/image"
import Link from "next/link"
export default function Projects(){
    return (
      <>
      
       <div className="border border-blue-200 opacity-50 text-center space-x-60 py-6">
         <Link href="#" className="btn btn-blue btn-blue:hover">Todos</Link>
         <Link href="#" className="btn btn-blue btn-blue:hover">Academicos</Link>
         <Link href="#" className="btn btn-blue btn-blue:hover">FreeLancer</Link>
       <div className="flex flex-wrap py-4 space-x-6">
       <a href="#">
        <Image src="/img/emprendar.jpg" alt="Emprendar" width={250} height={150}/>
       </a>
       <a href="#">
        <Image src="/img/emprendar.jpg" alt="Emprendar" width={250} height={150}/>
       </a>
       <a href="#">
        <Image src="/img/emprendar.jpg" alt="Emprendar" width={250} height={150}/>
       </a>
       <a href="#">
        <Image src="/img/emprendar.jpg" alt="Emprendar" width={250} height={150}/>
       </a>
       <a href="#">
        <Image src="/img/emprendar.jpg" alt="Emprendar" width={250} height={150}/>
       </a>
       </div>
       </div>

      </>
    )
}