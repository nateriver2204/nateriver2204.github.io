//Toán tử
function tinhtong(x, y) {
  alert(x + y);
}
function ketquacapheptoan(x, y) {
  alert(x + y);
  alert(x - y);
  alert(x * y);
  alert(x / y);
  alert(x ** y);
  alert(x % y);
}
function chuvihcn(x, y) {
  alert("Chu vi HCN là: " + 2 * (x + y));
}
function dientichhcn(x, y) {
  alert("Diện tích HCN là: " + x * y);
}
function bankinhduongtron(x) {
  alert("Đường kính hình tròn là: " + 2 * x);
  alert("Chu vi hình tròn là: " + 2 * x * 3.14);
  alert("Diện tích hình tròn là: " + x ** 2 * 3.14);
}
function chuyendoicm(x) {
  alert("= " + x / 100 + "m");
  alert("= " + x / 100000 + "km");
}
function chuyendoidoC(x) {
  alert((9 / 5) * x + 32 + " độ F");
}
//Cấu trúc điều khiển
function max2so(x, y) {
  if (x > y) alert("Số lớn nhất trong 2 số là: " + x);
  else {
    alert("Số lớn nhất trong 2 số là: " + y);
  }
}
function max3so(x, y, z) {
  let max = x;
  if (y > max) {
    max = y;
  }
  if (z > max) {
    max = z;
  }
  alert("Số lớn nhất trong 3 số là: " + max);
}
function kiemtraamduong(x) {
  if (x < 0) {
    alert(x + " là số âm");
  } else if (x > 0) {
    alert(x + " là số dương");
  } else {
    alert("x bằng 0");
  }
}
function chiahetcho5va11(x) {
  if (x % 55 == 0) {
    alert(x + " chia hết cho 5 và 11");
  } else {
    alert(x + " không chia hết cho 5 và 11");
  }
}
function kiemtrachanle(x) {
  if (x % 2 == 0) {
    alert(x + " là số chẵn");
  } else {
    alert(x + " là số lẻ");
  }
}
function kiemtranamnhuan(x) {
  if (x % 4 == 0) {
    if (x % 100 != 0) {
      alert(x + " là năm nhuận");
    } else {
      alert(x + " không phải năm nhuận");
    }
  }
}
let checkalphabet = prompt("Check Alphabet", "");
{
  switch (checkalphabet) {
    case "a":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "b":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "c":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "d":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "e":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "f":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "g":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "h":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "i":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "j":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "k":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "l":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "m":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "n":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "o":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "p":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "q":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "r":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "s":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "t":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "u":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "v":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "w":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "x":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "y":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "z":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "A":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "B":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "C":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "D":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "E":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "F":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "G":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "H":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "I":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "J":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "K":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "L":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "M":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "N":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "O":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "P":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "Q":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "R":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "S":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "T":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "U":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "V":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "W":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "X":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "Y":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    case "Z":
      alert(checkalphabet + " thuộc bảng chữ cái");
      break;
    default:
      alert(checkalphabet + " không thuuộc bảng chữ cái");
  }
}
let checkvowel = prompt("Check nguyên - phụ âm", "");
{
  switch (checkvowel) {
    case "u":
      alert(checkvowel + " là nguyên âm");
      break;
    case "e":
      alert(checkvowel + " là nguyên âm");
      break;
    case "o":
      alert(checkvowel + " là nguyên âm");
      break;
    case "a":
      alert(checkvowel + " là nguyên âm");
      break;
    case "i":
      alert(checkvowel + " là nguyên âm");
      break;
    case "U":
      alert(checkvowel + " là nguyên âm");
      break;
    case "E":
      alert(checkvowel + " là nguyên âm");
      break;
    case "O":
      alert(checkvowel + " là nguyên âm");
      break;
    case "A":
      alert(checkvowel + " là nguyên âm");
      break;
    case "I":
      alert(checkvowel + " là nguyên âm");
      break;
    default: {
      alert(checkvowel + " là phụ âm");
    }
  }
}
let checkviethoa = prompt("Check viết hoa - viết thường", "");
switch (checkviethoa) {
  case "a":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "b":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "c":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "d":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "e":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "f":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "g":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "h":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "i":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "j":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "k":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "l":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "m":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "n":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "o":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "p":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "q":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "r":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "s":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "t":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "u":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "v":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "w":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "x":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "y":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "z":
    alert(checkviethoa + " là kí tự viết thường");
    break;
  case "A":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "B":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "C":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "D":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "E":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "F":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "G":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "H":
    alert(ccheckviethoa + " là kí tự viết hoa");
    break;
  case "I":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "J":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "K":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "L":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "M":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "N":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "O":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "P":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "Q":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "R":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "S":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "T":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "U":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "V":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "W":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "X":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "Y":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  case "Z":
    alert(checkviethoa + " là kí tự viết hoa");
    break;
  default:
    alert(checkviethoa + " không thuuộc bảng chữ cái");
}
let checkngaytrongtuan = prompt("Nhập ngày trong tuần", "");
switch (checkngaytrongtuan) {
  case "1":
    alert("Chủ nhật");
    break;
  case "2":
    alert("Thứ hai");
    break;
  case "3":
    alert("Thứ ba");
    break;
  case "4":
    alert("Thứ tư");
    break;
  case "5":
    alert("Thứ năm");
    break;
  case "6":
    alert("Thứ sáu");
    break;
  case "7":
    alert("Thứ bảy");
    break;
  default:
    alert("Số từ 1 đến 7 thôi nhé!");
}
let checkngaytrongthang = prompt("Nhập tháng", "");
switch (checkngaytrongthang) {
  case "1":
    alert("Tháng 1 có 31 ngày");
    break;
  case "2":
    alert("Tháng 2 có 28 hoặc 29 ngày");
    break;
  case "3":
    alert("Tháng 3 có 31 ngày");
    break;
  case "4":
    alert("Tháng 4 có 30 ngày");
    break;
  case "5":
    alert("Tháng 5 có 31 ngày");
    break;
  case "6":
    alert("Tháng 6 có 30 ngày");
    break;
  case "7":
    alert("Tháng 7 có 31 ngày");
    break;
  case "8":
    alert("Tháng 8 có 31 ngày");
    break;
  case "9":
    alert("Tháng 9 có 30 ngày");
    break;
  case "10":
    alert("Tháng 10 có 31 ngày");
    break;
  case "11":
    alert("Tháng 11 có 30 ngày");
    break;
  case "12":
    alert("Tháng 12 có 31 ngày");
    break;
  default:
    alert("Số từ 1 đến 12 thôi nhé!");
}
let doidiem = prompt("Nhập điểm hệ 10", "");
if (doidiem < 4) {
  alert("F");
} else if (doidiem < 5.5) {
  alert("D");
} else if (doidiem < 7) {
  alert("C");
} else if (doidiem < 8.5) {
  alert("B");
} else {
  alert("A");
}
let tinhluongCN = prompt("Nhập lương cơ bản", "");
if (tinhluongCN < 2000000) {
  alert("Lương nhận được = " + tinhluongCN);
} else if (tinhluongCN >= 5000000) {
  alert("Lương nhận được =" + tinhluongCN * 1.3);
} else {
  alert("Lương nhận được = " + tinhluongCN * 1.15);
}
