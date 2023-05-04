export default function Contact () {
    return(
        <>
        <h1>Contact me</h1>
        <form >
            <input type="text" placeholder="Tu nombre" className="appearance-none border rounded w-40% py-2 px-3 bg-slate-800 text-green-400 leading-tight focus:outline-none focus:shadow-outline" id="name" />
            <input type="email" placeholder="Tu correo electronico" className="appearance-none border rounded w-40% py-2 px-3 bg-slate-800 text-green-400 leading-tight focus:outline-none focus:shadow-outline" id="email" />
            <textarea id="userMenssage" cols="30" rows='10' placeholder="Deja tu mensaje" className="appearance-none border rounded w-60% py-2 px-3 block mb-2 bg-slate-800 text-green-400 " />
        </form>

        </>

    )
}