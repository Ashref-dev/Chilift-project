const About1 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="text-gray-500 dark:text-gray-400 font-light sm:text-lg">
          <h2 className="text-gray-900 dark:text-white mb-4 font-display text-4xl font-medium tracking-tight">
            Révolutionnez votre mode de vie
          </h2>
          <p className="mb-4">
            Faites l'expérience d'une nouvelle ère avec nos meubles connectés
            intelligents. Nous sommes des stratèges, des designers et des
            développeurs. Des innovateurs et des résolveurs de problèmes. Assez
            petits pour être simples et rapides.
          </p>
          <p>
            Assez petits pour être simples et rapides, mais suffisamment grands
            pour vous offrir la portée que vous désirez à la vitesse dont vous
            avez besoin.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full rounded-lg lg:mt-10"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};
export default About1;
