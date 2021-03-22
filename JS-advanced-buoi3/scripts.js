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
                <a class="edit-btn"
                  ><i class="fas fa-edit"></i> Chỉnh sửa
                </a>
                <span>|</span>
                <a class="trash-btn"
                  ><i class="fas fa-trash-alt"></i> Xóa</a
                >
              </td>
            </tr>`);
      }
    }
  };
  xhttp.open("GET", "https://nateriver2204.herokuapp.com/users", true);
  xhttp.send();
}
loadDoc();

// add info
$("#save-btn").click(() => {
  $(".studentlist-wrapper").toggle("active");
  $(".addnewstudent-wrapper").toggle("active");
  $.post("https://nateriver2204.herokuapp.com/users", {
    name: `${$("#inputName").val()}`,
    birthday: `${$("#inputYear").val()}`,
    email: `${$("#inputEmail").val()}`,
    phone: `${$("#inputPhone").val()}`,
  });
  loadDoc();
});
