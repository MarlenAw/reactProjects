module.exports = (req, res, next) => {
  if( !req.user ){ //if passport has not found a user inside the req
    return res.status(401).send({ error: 'You must log in'});
  }
  next();
};
