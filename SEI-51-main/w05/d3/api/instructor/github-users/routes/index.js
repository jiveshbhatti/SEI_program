var express = require("express");
var router = express.Router();
const request = require("request-promise-native");

const token = process.env.GITHUB_TOKEN;
const ROOT_URL = "https://api.github.com/";

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const username = req.query.username;

    if (username) {
      // https://api.github.com/users/thatdevguy1?access_token=kjhfdigiuodsfifodsj
      const options = {
        uri: `${ROOT_URL}users/${username}`,
        headers: {
          "User-Agent": "thatdevguy1",
          Authorization: token,
        },
      };

      //Axios does this for you JSON => JS Object
      let response = await request(options);
      response = JSON.parse(response);
      return res.render("index", { title: "GitHub-API", userData: response });
    }

    res.render("index", { title: "GitHub-API", userData: undefined });
  } catch (err) {
    console.log(err);
    next(err.message);
  }
});

module.exports = router;
