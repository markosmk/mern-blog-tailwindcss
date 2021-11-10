import { Router } from 'express';
import { db } from '../../utils/connect.js';

const router = Router();

// get all posts
router.get('/', async (req, res, next) => {
  //option with try-catch
  try {
    const articles = await db.collection('blog').find().toArray();
    if (!articles) {
      throw Error('articles not Found');
    }
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json({ status: 400, error: err.message });
  }
});

// get information post
router.get('/:slug', async (req, res, next) => {
  // option with catch
  const slug = req.params.slug;
  const article = await db
    .collection('blog')
    .findOne({ slug })
    .then((data) => {
      if (!data) next(new Error('Article not Found'));
      res.status(200).json(data);
    })
    .catch((error) => {
      error.statusCode = 404;
      next(error);
    });
});

//add new post
router.post('/', async (req, res, next) => {
  // option with only catch
  const { title, slug, content, category } = req.body;
  const articleNew = await db
    .collection('blog')
    .insertOne({
      title,
      slug,
      content,
      category,
    })
    .catch(next);

  if (!articleNew) {
    throw Error('One Error happened');
  }
  res.status(202).json(articleNew);
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

//add new comments
router.post('/:slug/add-comments', (req, res, next) => {
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

export { router };
