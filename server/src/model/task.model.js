// const connectionMySQL = require("../database/db.connect");

// const getAllTaskModal = (res) => {
//     // Câu truy vấn SELECT để lấy dữ liệu từ bảng "taskkeeper"
//     const query = "SELECT * FROM taskkeeper";
  
//     let notes = [];
//     connectionMySQL.query(query, (error, results) => {
//       if (error) {
//         console.error("Error fetching data from MySQL:", error);
//         res.status(500).json({ message: "Error fetching data from MySQL" });
//         return;
//       }
//       notes = results;
//       console.log(notes);
//       res.status(200).json(notes);
//     });
//   };


//   const addNewTaskModel = (req, res) => {
//     const newNotes = {
//       id: req.body.id,
//       title: req.body.title,
//     };
  
//     // Truy vấn SQL INSERT
//     const query = "INSERT INTO taskkeeper (id, title) VALUES (?, ?)";
//     const values = [newNotes.id, newNotes.title];
  
//     // Thực thi truy vấn
//     connectionMySQL.query(query, values, (error, result) => {
//       if (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "Error add note" });
//       } else {
//         console.log("Add new taskkeeper successfully");
//         res.status(200).json({ message: "Add new taskkeeper successfully" });
//       }
//     });
//   };


//   const deleteTaskModel = (id, res) => {
//     // Câu truy vấn DELETE để xóa ghi chú dựa trên id
//     const query = "DELETE FROM taskkeeper WHERE id = ?";
  
//     // Thực thi câu truy vấn
//     connectionMySQL.query(query, [id], (error, result) => {
//       if (error) {
//         console.error("Error deleting taskkeeper from MySQL:", error);
//         res.status(500).json({ message: "Error deleting taskkeeper from MySQL" });
//         return;
//       }
  
//       // Kiểm tra số lượng ghi chú bị ảnh hưởng (bị xóa)
//       const affectedRows = result.affectedRows;
//       if (affectedRows > 0) {
//         console.log("Delete taskkeeper successfully");
//         res.status(200).json({ message: "Delete taskkeeper successfully" });
//       } else {
//         console.log("taskkeeper not found");
//         res.status(404).json({ message: "Ntaskkeeperote not found" });
//       }
//     });
//   };

//   module.exports = { addNewTaskModel, getAllTaskModal, deleteTaskModel };