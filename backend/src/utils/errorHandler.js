function errorHandler(err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;

  if (err.statusCode === 404) {
    //return res.status(301).redirect('/not-found');
    return res.status(404).json({
      ...err,
      message: 'Resource not found',
      error: err.message,
    });
  }

  // default to 500 server error
  return res.status(err.statusCode).json({ error: err.toString() });
}

export { errorHandler };
