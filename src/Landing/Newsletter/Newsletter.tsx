const Newsletter = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="bg-gray-50 absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
          <svg
            className="absolute left-1/2 top-8 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#deaf1b] px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              ></svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#ffffff] sm:text-4xl xl:text-5xl">
                  Soyez averti lors du lancement.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl  px-2 text-xl text-[#ffffff] md:px-16">
                  Soyez averti dès la sortie des derniers meubles technologiques
                  qui vous facilitent la vie.
                </p>
              </div>
              <div className=" row my-4 flex  items-center justify-center">
                <div className="min-w-0 max-w-lg flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Adresse e-mail
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="border-transparent text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-white focus:ring-offset-indigo-600 block w-full rounded-md border px-5 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                    placeholder="Entrer votre e-mail"
                  />
                </div>
                <div className=" sm:ml-3 ">
                  <button className="border-transparent text-white focus:ring-white block w-full rounded-md bg-[#ffffff] px-5 py-3 text-base font-medium shadow-lg hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow sm:px-10">
                    Me notifier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
