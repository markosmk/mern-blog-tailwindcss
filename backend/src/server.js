import express from 'express';

const app = express();

// para parsear json entrante
app.use(express.json());

app.get('/api/', (req, res, next) => {
  res.send({ message: 'Hola' });
});

app.get('/api/blog/:slug', (req, res, next) => {
  res.json({
    message: `El parametro slug ingresado es: ${req.params.slug}`,
  });
});

app.post('/api/blog', (req, res, next) => {
  res.json({
    status: 200,
    message: 'Post published',
    body: req.body,
  });
});

const listArticles = [
  {
    slug: 'learn-react',
    comments: [],
  },
  {
    slug: 'learn-nextjs',
    comments: [],
  },
];

app.post('/api/blog/:slug/add-comments', (req, res, next) => {
  const { username, message } = req.body;
  const slugArticle = req.params.slug;

  listArticles.map((item) => {
    if (item.slug === slugArticle) {
      item.comments.push({ username, message });
    }
  });

  // listArticles[slugArticle].comments.push({ username, message });
  res.status(200).json(listArticles);
});

app.listen(8000, () => {
  console.log(`Listen port 8000 in http://localhost:8000`);
});
