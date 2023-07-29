const posts = [
  {
    title: "Découvrez notre mobilier intelligent et élégant",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Plongez-vous dans un monde de sérénité avec notre gamme de meubles connectés intelligents. Nos créations allient élégance et technologie pour apporter un apaisement à l'esprit et améliorer la santé physique et mentale. ",
    date: "16 mars 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Trouvez l'harmonie grâce à notre mobilier connecté",
    href: "#",
    category: { name: "Vidéo", href: "#" },
    description:
      "Faites l'expérience d'un esprit calme et équilibré avec notre mobilier IOT intelligent. Nos conceptions innovantes intègrent la technologie pour créer un environnement propice à la détente et à la paix intérieure. ",
    date: "10 mars 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Découvrez comment notre mobilier améliore votre bien-être",
    href: "#",
    category: { name: "Étude de cas", href: "#" },
    description:
      "Explorez les avantages pour la santé de notre mobilier IOT intelligent. Grâce à des matériaux de qualité et une technologie avancée, nos créations contribuent à améliorer la santé physique et mentale de nos clients.",
    date: "12 février 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogSection() {
  return (
    <div className="bg-gray-50 relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Le Chilift blog
          </h2>
          <p className="text-gray-500 mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
            Plongez dans notre collection d'articles sur notre mobilier connecté
            intelligent.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="bg-white flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-indigo-600 text-sm font-medium">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-gray-900 text-xl font-semibold">
                      {post.title}
                    </p>
                    <p className="text-gray-500 mt-3 text-base">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 text-sm font-medium">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="text-gray-500 flex space-x-1 text-sm">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>lecture de {post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
