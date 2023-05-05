export default function Contact() {
  return (
    <>
      <h1>Contact me</h1>
      <form>
        <div className="flex justify-end">
            <div className="col-2">
          <div className="w-200 h-12 mr-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="appearance-none border rounded py-2 px-3 bg-slate-800 text-green-400 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
            />
          </div>
          <div className="w-200 h-24 mr-4">
            <input
              type="email"
              placeholder="Tu correo electronico"
              className="appearance-none border rounded w-40% py-2 px-3 bg-slate-800 text-green-400 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
            />
          </div>
          </div>
          <div className="w-200 h-200 mr-6">
            <textarea
              id="userMenssage"
              cols="30"
              rows="10"
              placeholder="Deja tu mensaje"
              className="appearance-none border rounded w-60% py-2 px-3 mb-2 bg-slate-800 text-green-400 align-end"
            />
          </div>
        </div>
      </form>
    </>
  );
}
