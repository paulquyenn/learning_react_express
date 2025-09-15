const delay = (req, res, next) => {
  setTimeout(() => {
    if (req.header.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      console.log(">>> token", token);
    }
    next();
  }, 3000);
};

export default delay;
