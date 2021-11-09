import CardArticle from '../components/CardArticle';
import api from '../mocks/articles';

export default function ArticlesList() {
  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold text-center">Lista de articulos</h1>
      <div className="py-12 grid gap-x-6 md:gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        {api.map((item, index) => (
          <CardArticle key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
