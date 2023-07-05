const app = require("./src/app");





const port = 8000;
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});