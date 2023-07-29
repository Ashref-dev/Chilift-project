const About2 = () => {
  return (
    <div className="relative">
      <div className="bg-gray-100 absolute inset-x-0 bottom-0 h-1/2" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/8844576/pexels-photo-8844576.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-yellow mix-blend-screen" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white block">Prenez en main votre santé mentale</span>
              <span className="text-white block">et améliorez votre qualité de vie</span>
            </h1>
            <p className="text-indigo-200 mx-auto mt-6 max-w-lg text-center text-xl sm:max-w-3xl">
              Nos meubles intelligents et élégants sont conçus pour vous aider à prendre soin de votre bien-être mental. Ils créent un environnement apaisant et harmonieux, contribuant ainsi à améliorer votre qualité de vie globale.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <a
                  href="#"
                  className="border-transparent text-indigo-700 bg-white hover:bg-indigo-50 flex items-center justify-center rounded-md border px-4 py-3 text-base font-medium shadow-sm sm:px-8"
                >
                  Commencer
                </a>
                <a
                  href="#"
                  className="border-transparent text-white bg-indigo-500 flex items-center justify-center rounded-md border bg-opacity-60 px-4 py-3 text-base font-medium shadow-sm hover:bg-opacity-70 sm:px-8"
                >
                  Démo en direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About2;
