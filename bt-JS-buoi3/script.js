// Viết chương trình in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, số chia hết cho 5 thì in ra “Buzz”, nếu chia hết cho cả 3 và 5 thì in “FizzBuzz”, nếu không chia hết cho cả 2 thì in “BuzzFizz” trong khoảng từ 0 đến 100
// for (let x = 0; x < 101; x++) {
//   if (x % 3 == 0 && x % 5 == 0) {
//     console.log(x + " FizzBuzz");
//   } else if (x % 5 == 0) {
//     console.log(x + " Buzz");
//   } else if (x % 3 == 0) {
//     console.log(x + " Fizz");
//   } else {
//     console.log(x + " BuzzFizz");
//   }
// }

//  Viết chương trình tính tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000
// for (let i = 0, sum = 0; i < 1001; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     sum += i;
//   }
//   console.log(sum);
// }

//  Viết chương cho phép nhập một số, kiểm tra số đó có phải số nguyên tố hay không
// function isPrime(x) {
//   let count = 0;
//   for (let i = 1; i < x+1; i++) {
//     if (x % i == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     console.log(x + " la so nguyen to");
//   } else {
//     console.log(x + " k la so nguyen to");
//     }
// }

//  Viết chương trình cho phép nhập một số “n”, in ra tất cả số nguyên tố trong khoảng từ 0 đến “n”
// function insonguyento(x) {
//   for (j = 1; j < x + 1; j++) {
//     let count = 0;
//     for (i = 2; i < x + 1; i++) {
//       if (j % i == 0) {
//         count++;
//       }
//     }
//     if (count == 1) {
//       console.log(j);
//     }
//   }
// }

//  Viết chương trình cho phép nhập một hai số a b, tính tổng tất cả số nguyên tố trong khoảng từ a đến b
// function tinhtongsoNT(a, b) {
//   let sum = 0;
//   for (let j = b; j > 0; j--) {
//     let count = 0;

//     for (let i = 2; i < b + 1; i++) {
//       if (j % i == 0) {
//         count++;
//       }
//     }

//     if (count == 1) {
//       sum += j;
//     }
//   }
//   console.log(sum);
// }

//  Viết chương trình in ra bảng cửu chương ngược (từ 10 về 1)
// for (let i = 10; i >= 1; i--) {
//   let s = " ";
//   for (let j = 10; j >= 1; j--) {
//     s += String(i * j).padStart(4, " ");
//   }
//   console.log(s);
// }

//  Viết chương trình cho phép nhập vào một số, in ra số đầu tiên và cuối cùng của số đó (VD: 12345 => 15)
// function daucuoi(x) {
//   let last = 0;
//   let bandau = x;
//   let first = 0;
//   do {
//     first = x % 10;
//     x = Math.floor(x / 10);
//   } while (x > 0);
//   console.log(first);
//   console.log((last = bandau % 10));
// }

//  Viết chương trình cho phép nhập một số, kiểm tra xem số đó có phải là số Palindrome hay không (Số Palindrome là số đối xứng) (VD: 141 => true, 123 => false)
// function isPalindrome(x) {
//   let conlai = x;
//   let reverse = 0;
//   let sum = 0;
//   for (; x > 0; x = Math.floor(x / 10)) {
//     reverse = x % 10;
//     sum = sum * 10 + reverse;
//   }
//   if (sum == conlai) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }

//  Viết chương trình cho phép nhập một số, tính giai thừa của số đó
// function tinhgiaithua(x) {
//   let giaithua = 1;
//   for (let i = 1; i < x + 1; i++) {
//     giaithua = giaithua * i;
//   }
//   console.log(giaithua);
// }

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Armstrong hay không (Số Armstrong là số bằng tổng lập phương của tất cả các chữ số của nó) (VD: 371 = 3*3 + 7*3 + 1*3 => true, 123 != 1*3 + 2*3 + 3*3 => false)

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Perfect hay không (Số n là số Perfect nếu n bằng tổng tất cả các số từ 1 đến n / 2) (VD: 6 = 1 + 2 + 3 => true)

// Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Strong hay không (Số Strong là số bằng tổng giai thừa các chữ số của nó) (VD: 145 = 1! + 4! + 5! => true)

// Viết chương trình cho phép nhập một số n, in ra dãy số Fibonacci trong khoảng từ 0 đến n (Dãy Fibonacci có số bắt đầu là 0, 1 hoặc 1, 1 và các số sau có tổng bằng 2 số trước đó cộng lại)

// Viết chương trình cho phép nhập 2 số, tìm bội chung nhỏ nhất của 2 số đó

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

// 1 1 1 1 1

// 1 1 1 1 1

// 1 1 1 1 1

// 1 1 1 1 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

// 1 0 1 0 1

// 0 1 0 1 0

// 1 0 1 0 1

// 0 1 0 1 0

// 1 0 1 0 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng = n)

//     1

//    1 1

//   1 2 1

// 1 3 3 1

// 1 4 6 4 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n, n lẻ)

// 1 0 0 0 1

// 0 1 0 1 0

// 0 0 1 0 0

// 0 1 0 1 0

// 1 0 0 0 1

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

// 1

// 2 6

// 3 7 10

// 4 8 11 13

// 5 9 12 14 15

// Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (n lẻ)

// 1       1

//  2     2

//   3   3

//    4 4

//     5

//    6 6

//   7   7

//  8     8

// 9       9

// Hàm

//  Viết hàm tính lập phương của một số

//  Viết hàm tìm chu vi, diện tích hình tròn

//  Viết hàm tìm số lớn nhất giữa 2 số

//  Viết hàm kiểm tra số Prime

//  Viết hàm kiểm tra số Armstrong

//  Viết hàm kiểm tra số Perfect

//  Viết hàm kiểm tra số Strong

//  Viết hàm kiểm tra số Palindrome

//  Viết hàm tính số Fibonacci

// Viết hàm tính giai thừa

// Viết hàm kiểm tra một số có phải là số nguyên tố hay không, kết quả trả về true hoặc false

// Viết hàm tính tổng tất cả số lẻ trong khoảng từ 0 đến n (n là tham số truyền vào) và trả về giá trị đó
