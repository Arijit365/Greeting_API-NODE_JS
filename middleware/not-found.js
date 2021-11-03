const notFound = (res , req) => {res.status(404).send('route does not find');}

module.exports = notFound;