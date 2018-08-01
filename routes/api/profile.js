module.exports = app => {
  // @access: Public
  // @desc: tests profile.js request
  app.get("/api/profile/test", (req, res) => {
    res.send("working");
  });
};
