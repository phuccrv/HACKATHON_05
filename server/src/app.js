const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const connection = require("./database/db.connect")

//Middelware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());


// app.get("/", (req, res) => {
//     res.status(200).json("hello world");
// })


app.get("/api/tasks", (req, res) => {
    const query = 'SELECT * FROM taskkeeper';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
        res.status(500).send('Đã xảy ra lỗi trong quá trình lấy danh sách todo');
      } else {
        res.send(results);
      }
    });
  });

  app.post("/api/tasks", (req, res) => {
    const { content, date, status, username } = req.body;
    console.log(req.body);
    const query = 'INSERT INTO taskkeeper (content, duedate, status, assignedto) VALUES (?, ?, ?, ?)';
    const values = [content, date, status, username];
    
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
        res.status(500).send('Đã xảy ra lỗi trong quá trình thêm task');
      } else {
        res.status(201).send('Task đã được thêm thành công');
      }
    });
  });

  app.delete("/api/tasks/:id", (req, res) => {
    const taskId = req.params.id;
    const query = "DELETE FROM taskkeeper WHERE id = ?";
    const values = [taskId];
  
    connection.query(query, values, (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn cơ sở dữ liệu:", err);
        res.status(500).send("Đã xảy ra lỗi trong quá trình xóa task");
      } else {
        res.status(200).send("Task đã được xóa thành công");
      }
    });
  });

module.exports = app;
