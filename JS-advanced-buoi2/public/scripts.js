$("#add-btn").click(() => {
  $(".studentlist-wrapper").toggle("active");
  $(".addnewstudent-wrapper").toggle("active");
});

$("#back-btn").click(() => {
  $(".studentlist-wrapper").toggle("active");
  $(".addnewstudent-wrapper").toggle("active");
});

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      for (i = 0; i < JSON.parse(this.responseText).length; i++) {
        $("tbody").append(`<tr>
              <th scope="row">${JSON.parse(this.responseText)[i].name}</th>
              <td>${JSON.parse(this.responseText)[i].birthday}</td>
              <td>${JSON.parse(this.responseText)[i].email}</td>
              <td>${JSON.parse(this.responseText)[i].phone}</td>
              <td>
                <span class="edit-btn"
                  ><i class="fas fa-edit"></i> Chỉnh sửa
                </span>
                <span>|</span>
                <span class="trash-btn"
                  ><i class="fas fa-trash-alt"></i> Xóa</span
                >
              </td>
            </tr>`);
      }
    }
  };
  xhttp.open("GET", "http://localhost:3000/users", true);
  xhttp.send();
}
loadDoc();

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
  loadDoc();
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
