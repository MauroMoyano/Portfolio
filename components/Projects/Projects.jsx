import Link from "next/link"
export default function Projects(){
    return (
      <>
      
       <div class="border border-blue-200 opacity-50 text-center space-x-60" id='categorias'>
         <Link href="#">Todos</Link>
         <Link href="#">Academicos</Link>
         <Link href="#">Freelancer</Link>
       </div>
      </>
    )
}