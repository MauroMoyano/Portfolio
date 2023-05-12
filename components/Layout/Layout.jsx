import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <footer className="flex justify-center items-center h-16 bg-gray-800 text-white fixed bottom-0 w-full">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="w-full h-screen flex items-center justify-center p-3%">
            <a
              href="https://twitter.com/MauroMoyanoDev"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/twitter.png"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              />
            </a>
            <a
              href="https://github.com/mauromoyano"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/github.png"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mauro-moyano-dev-full-stack/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/in.png"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              />
            </a>
          </div>
          <div className="whitespace-nowrap pr-5">
            <p>© {new Date().getFullYear()} Mauro Moyano</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
