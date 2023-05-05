import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <>
      <div className="border border-blue-200 opacity-50 text-center space-x-60 py-6">
        <Link href="#" className="btn btn-blue btn-blue:hover">
          Todos
        </Link>
        <Link href="#" className="btn btn-blue btn-blue:hover">
          Academicos
        </Link>
        <Link href="#" className="btn btn-blue btn-blue:hover">
          FreeLancer
        </Link>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-24 h-24 place-items-center">
            <a href="#">
              <Image
                src="/img/emprendar.jpg"
                alt="Emprendar"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className="w-24 h-24 place-items-center">
            <a href="#">
              <Image
                src="/img/emprendar.jpg"
                alt="Emprendar"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className="w-24 h-24 place-items-center">
            <a href="#">
              <Image
                src="/img/emprendar.jpg"
                alt="Emprendar"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className="w-24 h-24 place-items-center">
            <a href="#">
              <Image
                src="/img/emprendar.jpg"
                alt="Emprendar"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className="w-24 h-24 place-items-center">
            <a href="#">
              <Image
                src="/img/emprendar.jpg"
                alt="Emprendar"
                width={250}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
