const app = require("./src/app/app");

const port = 8000;
app.listen(port, () => {
  console.log(`Express Server running at http://localhost:${port}`);
});
