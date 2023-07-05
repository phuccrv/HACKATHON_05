const mysql = require('mysql2');

// Tạo kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0914472959',
  database: 'listnode'
});


connection.connect((err) => {
    if (err) {
      console.error('Lỗi kết nối cơ sở dữ liệu:', err);
    } else {
      console.log('Kết nối thành công đến cơ sở dữ liệu MySQL.');
    }
  });
  

module.exports = connection;