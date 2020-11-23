//Viết function cho phép nhập vào key và value tương ứng, gán key và value vào một object. Cho phép nhập số lượng key và value tùy ý, chỉ dừng khi nào người dùng bấm cancel hoặc nhập giá trị rỗng
// let abc = {};
// abc.name = prompt("nhap ten", "");
// while (abc.name !== null || abc.name !== "") {
//   abc.name = prompt("nhap ten", "");
//   if (abc.name === null || abc.name === "") {break;}
// }

//Thêm vào bài tập trên, sau khi nhập thông tin của object, in toàn bộ thông tin ra màn hình console
// let abc = {};
// abc.name = prompt("nhap ten", "");
// while (abc.name != null || abc.name != "") {
//   abc.name = prompt("nhap ten", "");
//   console.log(abc.name);
//   if (abc.name === null || abc.name === "") {break;}
// }

// Viết hàm lấy liệt kê toàn bộ key của object
// let user = {};
// user.name = "Quang Anh";
// user.age = 23;
// user.phonenumber = "09787925446";
// function lietkekey() {
//     for (let key in user) {
//       console.log(key + ": " + user[key]);
//     }
// }

//Viết hàm nhận 2 tham số, một là object, 2 là key, nếu key có tồn tại thì trả về giá trị của key đó, nếu không, trả về false. Sau đó, in ra màn hình giá trị trả về, nếu không có in ra “Không có ‘key’”.
// let user = {};
// user.name = "Quang Anh";
// user.age = 23;
// function oak(a = user, b) {
//   for (let key in user) {
//     if (b = key) {
//       console.log(user[b]);
//     } else {
//       console.log("False");
//     }
//   }
// }
