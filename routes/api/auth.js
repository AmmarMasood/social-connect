module.exports = app => {
  // @access: Public
  // @desc: tests auth.js request
  app.get("/api/users/test", (req, res) => {
    res.send("auth file is working");
  });
};
