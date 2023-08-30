module.exports = function (err, req, res, next) {
    console.error(err);
    res.serverError('An error occurred');
  };
  