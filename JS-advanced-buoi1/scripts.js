$("#add-btn").click(() => {
  $(".studentlist-wrapper").toggle("active");
  $(".addnewstudent-wrapper").toggle("active");
});

$("#back-btn").click(() => {
  $(".studentlist-wrapper").toggle("active");
  $(".addnewstudent-wrapper").toggle("active");
});

// add info
$("#save-btn").click(() => {
  $(".studentlist-wrapper").toggle("active");
  $(".addnewstudent-wrapper").toggle("active");
  $.post("http://localhost:3000/users", {
    name: `${$("#inputName").val()}`,
    birthday: `${$("#inputYear").val()}`,
    email: `${$("#inputEmail").val()}`,
    phone: `${$("#inputPhone").val()}`,
  });
});
// let info = {
//   name: `${$("#inputName").val()}`,
//   birthday: `${$("#inputYear").val()}`,
//   email: `${$("#inputEmail").val()}`,
//   phone: `${$("#inputPhone").val()}`,
// };

// $.ajax({
//   type: "POST",
//   url: "http://localhost:3000/users",
//   data: info,
//   dataType: "",
// });
