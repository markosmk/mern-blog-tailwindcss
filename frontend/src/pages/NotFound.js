import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-center py-12">
        Error 404 - No encontrado
      </h1>

      <Link to="/" className="block text-center">
        Ir a Home
      </Link>
    </div>
  );
}
