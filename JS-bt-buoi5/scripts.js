//Viet ham tao 1 so ngau nhien tu 0 den n
// function random(x) {
//   console.log((x = Math.floor(Math.random() * (x + 1))));
// }

//Viet ham chuyen doi co so
// function convert(x, csbd, cscd) {
//   if (csbd == 2 && cscd == 10) {
//     console.log((x = parseInt(x, 2).toString(10)));
//   } else if (csbd == 2 && cscd == 16) {
//     console.log((x = parseInt(x, 2).toString(16)));
//   } else if (csbd == 16 && cscd == 10) {
//     console.log((x = parseInt(x, 16).toString(10)));
//   } else if (csbd == 16 && cscd == 2) {
//     console.log((x = parseInt(x, 16).toString(2)));
//   } else if (csbd == 10 && cscd == 2) {
//     console.log((x = x.toString(2)));
//   } else if (csbd == 10 && cscd == 16) {
//     console.log((x = x.toString(16)));
//   }
// }

//Viet ham tao 1 so ngau nhien trong khoang a den b
// function random(a, b) {
//   return Math.floor(Math.random() * (b - a + 1) + a);
// }

//Viet ham tao ma mau Hex ngau nhien
// function hex() {
//   var randomColor = "#000000";
//   return randomColor.replace(/0/g, function () {
//     return (~~(Math.random() * 16)).toString(16);
//   });
// }

//Viet ham cat chuoi tu vi tri dau tien
// let abcd = "abcdefghjklm";
// function slicer(x) {
//   console.log(abcd = abcd.slice(0,x));
// }

//Viet ham chuyen doi 1 ten thanh ten viet tat
// let name = "Quang Anh";
// function abbr(str) {
//   var i = str.lastIndexOf(" ");
//   return str.slice(0, i + 2) + ".";
// }
// console.log(abbr(name));

//Viet ham an dia chi email
// let email = "nateriver2204@gmail.com";
// function abbr(email) {
//     var i = email.lastIndexOf("@");
//     return email.slice(0, 4) + "..." + email.slice(i);
// }
// console.log(abbr(email));

//Viet ham chuyen doi chuoi thanh viet hoa
// let name = "quang anh";
// function capitalize(name) {
//   var i = name.lastIndexOf(" ");
//   return (
//     name.charAt(0).toUpperCase() +
//     name.slice(1, i) +
//     " " +
//     name.charAt(i + 1).toUpperCase() +
//     name.slice(i + 2)
//   );
// }
// console.log(capitalize(name));

//Viet ham chuyen doi 1 chuoi thanh dang paramaterize
// let name = "Quang Anh";
// function paramaterize(name) {
//   return name.toLowerCase().replace(" ", "-");
// }
// console.log(paramaterize(name));

//Viet ham loai bo khoang trang o dau cuoi va rut gon o giua
// let name = "     Quang   Anh      ";
// function trimming(name) {
//   var i = name.lastIndexOf(" ");
//   return name.trim().replace(/\s+/g," ");
// }
// console.log(trimming(name));

//Viet ham dao nguoc chu in hoa thanh in thuong va ngc lai
// let str = "aBCdEfg";
// var char = "";
// function reverse(x) {
//   for (let i = 0, char = str.charAt(i); i <= str.length; i++) {
//     if (char == char.toUpperCase()) {
//       return char.toLowerCase();
//     } else if (char == char.toLowerCase()) {
//       return char.toUpperCase();
//     }
//   }
// }
// console.log(reverse(str));

//Viet ham lap lai chuoi n lan
// function repeat(str,x) {
//   return str.repeat(x);
// }

//Viet ham chen 1 chuoi con vao chuoi tai index chi dinh
// let name = "QuangAnh";
// function insert(str, x) {
//   return name.slice(0, x) + str + name.slice(x);
// }

//Viet ham rut gon chuoi neu chuoi dai hon gia tri chi dinh
// let name = "Quang Anh";
// function slicer(str, x) {
//   return str.slice(0, x) + "...";
// }
// console.log(slicer(name, 5));

//Viet ham dem so lan xuat hien cua chuoi con trong chuoi
// let str = "asdqdaqwxed";
// function count(x) {
//     let count = 0;
//     for (let i = 0; i <= str.length; i++){
//         if (str.charAt(i) == x) { count++;}
//     }
//     console.log(count);
// }

//Viet ham cat chuoi theo so tu chi dinh
// const str = "My name is Quang Anh";
// const cut = str.split(" ");

//Viet ham sao chep array
// let arr = [1,2,3,4,5,6,7,8,9];
// let arrfake = [];
// function copy(){
//     return arrfake = arr;
// }
// console.log(copy());

//Cho 1 mang so, tim gtri lon nhat
// let arr = [0, 1, 2, 9, 8, 6, 4];
// function max() {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(max());
