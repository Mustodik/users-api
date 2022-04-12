function logger(req, res, next) {
    console.log(`${req.method}${req.originalUrl}${res.statuscode}`);
    next();
}

module.exports =logger;
