const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const connection = require("../db/db");
const app = express();

// middleware

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// database

app.get("/", (req, res) => {
  res.status(200).json("hello world!");
})

app.post("/api/notes", (req, res) => {
    const { title } = req.body;
    const sql = "INSERT INTO notes (title) VALUES (?)";
    connection.query(sql, [title], (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn cơ sở dữ liệu: ", err);
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        return;
      }
  
      console.log("Đã lưu title vào cơ sở dữ liệu!");
      res.status(200).json({ message: "Gửi thành công!" });
    });
  });

//handleError

module.exports = app;
