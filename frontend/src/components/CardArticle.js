import { Link } from 'react-router-dom';

export default function CardArticle({ data }) {
  const { title, image, content, slug, category } = data;
  let contentShort;
  if (content.length > 125) {
    contentShort = content.substring(0, 124) + '...';
  }
  return (
    <div className="relative mt-12 mb-6 w-full inline-block">
      <div className="bg-white p-6 rounded-2xl block relative shadow-lg">
        {/* Imagen Post */}
        <div className="-mt-16 mb-6 relative rounded-2xl overflow-hidden shadow-lg">
          <Link to={`/blog/${slug}`}>
            <img
              src={image}
              alt={title}
              className="rounded-2xl w-full max-w-full h-auto"
            />
          </Link>
          <a
            href="/blog/category/slug"
            className="absolute top-4 right-4 bg-yellow-500 text-white py-1 px-3 inline-flex text-sm rounded-2xl font-bold capitalize"
          >
            {category}
          </a>
        </div>
        {/* Descripcion corta Post */}
        <div>
          <h4 className="text-2xl font-bold mb-3">
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h4>
          <p className="mb-6 text-gray-500">{contentShort}</p>
          <ul className="flex items-center text-gray-500 gap-x-2">
            <li className="text-sm font-medium capitalize mb-0">
              <a href="/author/slug">
                <img
                  src="https://noonpost.netlify.app/html/template/assets/img/user/1.jpg"
                  alt="Author Post"
                  className="w-10 h-10 rounded-full"
                />
              </a>
            </li>
            <li className="mr-4">
              <a href="/author/slug">Author Name</a>
            </li>
            <li>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </li>
            <li className="">15 Enero, 2021</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
