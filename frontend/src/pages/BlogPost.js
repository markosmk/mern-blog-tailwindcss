import { useParams } from 'react-router';
import CardMini from '../components/CardMini';
import NotFound from './NotFound';
import api from '../mocks/articles';

export default function Article() {
  const { slug } = useParams();
  const article = api.find((item) => item.slug === slug);
  const recomendable = api.filter((item) => item.slug !== slug);
  if (!article) return <NotFound />;

  return (
    <div className="w-3/4 mx-auto space-y-4 mt-16">
      <div className="bg-white p-8 mb-8 rounded-2xl shadow-lg">
        <div className="-mt-16 mb-10 rounded-2xl">
          <img
            className="w-full h-full object-cover shadow-lg rounded-2xl"
            src={article.image}
            alt="img article"
          />
        </div>
        <a
          href="/"
          className="bg-yellow-500 text-white py-1 px-3 inline-flex text-sm rounded-2xl font-bold capitalize mb-4"
        >
          {article.category}
        </a>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="mb-6">
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
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </li>
            <li className="">15 Enero, 2021</li>
          </ul>
        </div>
        <p className="mb-6 text-xl font-light text-gray-500 leading-8">
          {article.content}
        </p>
        <div className="flex">
          <div className="flex-1">Tags</div>
          <div>Share Follows</div>
        </div>
      </div>
      <h2 className="text-2xl font-bold">Tambien te puede interesar...</h2>
      <div className="grid grid-cols-2 gap-x-6">
        {recomendable.map((item, index) => {
          return index <= 1 ? <CardMini key={index} data={item} /> : '';
        })}
      </div>
    </div>
  );
}
