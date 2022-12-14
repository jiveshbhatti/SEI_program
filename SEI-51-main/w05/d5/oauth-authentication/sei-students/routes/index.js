var router = require("express").Router();
const passport = require("passport");

// The root route renders our only view
router.get("/", function (req, res) {
  res.redirect("/students");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/students",
    failureRedirect: "/students",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/students");
  });
});

module.exports = router;
