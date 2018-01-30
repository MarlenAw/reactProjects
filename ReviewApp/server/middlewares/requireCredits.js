module.exports = (req, res, next) => {
  if(req.user.credits < 1 ){ //if your cedits are less than 1 that means you cant buy
    return res.status(403).send({ error: 'You must add credits to your account'});
  }
  next();
};

//https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html

//to see the status code definitions ..res.status(403/401/etc..)
