const Quote = () => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-500 relative overflow-hidden rounded-xl px-8 py-24 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
            <img
              src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1">
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
              alt=""
            />
            <blockquote className="text-white mt-6">
              <p className="text-xl font-medium sm:text-2xl">
                Chez Chilift, nous avons révolutionné la manière dont nous interagissons avec nos clients. Nous avons enregistré des réservations records, une satisfaction client plus élevée et une réduction du taux d'attrition.
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>Marie Chilvers</span>
                  <span>PDG, Chilift</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quote;
