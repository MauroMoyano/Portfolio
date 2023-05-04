export default function Contact () {
    return(
        <>
        <h1>Contact me</h1>
        <form >
            <input type="text" placeholder="Tu nombre" className="block text-gray-700 font-bold mb-2" />
            <input type="email" placeholder="Tu e-mail" className="block text-gray-700 font-bold mb-2" />
            <textarea name="userMenssage" cols="30" rows='10' placeholder="Deja tu mensaje" className="block text-gray-700 font-bold mb-2" />
        </form>

        </>

    )
}