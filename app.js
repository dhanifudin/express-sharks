const express = require("express");
const app = express();
const router = express.Router();

const path = `${__dirname}/views`;
const port = 3000;

router.get("/", (req, res) => {
  res.sendFile(`${path}/index.html`);
});

router.get("/sharks", (req, res) => {
  res.sendFile(`${path}/sharks.html`);
});

app.use(express.static(path));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
