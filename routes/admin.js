const express = require("express");
const router = express.Router();
// const nunjucks = require("nunjucks");

function testMiddleWare(req, res, next) {
  console.log("첫번째 미들웨어");
  next();
}

function testMiddleWare2(req, res, next) {
  console.log("두번째 미들웨어");
  next();
}

router.get("/", testMiddleWare, testMiddleWare2, (_, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (_, res) => {
  res.render("admin/products.html", { message: "heello" });
});
router.get("/products/write", (_, res) => {
  res.render("admin/write.html");
});
router.post("/products/write", (req, res) => {
  res.send(req.body);
});

module.exports = router;
