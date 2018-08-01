module.exports = app => {
  // @access: Public
  // @desc: tests posts.js request
  app.get("/api/posts/test", (req, res) => {
    res.send("oworking");
  });
};
