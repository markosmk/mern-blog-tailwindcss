import dotenv from 'dotenv';
import express from 'express';
import { connect } from './utils/connect.js';
import { router as routesBlog } from './components/blog/routes.js';
import { errorHandler } from './utils/errorHandler.js';

// to read env files
dotenv.config();

// create app express
const app = express();

// connect to mongodb
connect();

// para parsear json entrante
app.use(express.json());

// routes
app.use('/api/blog', routesBlog);
app.get('*', function (req, res, next) {
  const error = new Error(`${req.ip} tried to access ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});
app.use(errorHandler);

// load server
app.listen(8000, () => {
  console.log(`Listen port 8000 in http://localhost:8000`);
});
