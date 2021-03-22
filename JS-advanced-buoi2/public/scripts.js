// $("#add-btn").click(() => {
//   $(".studentlist-wrapper").toggle("active");
//   $(".addnewstudent-wrapper").toggle("active");
// });

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

function loadOnClick() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      $("#add-btn").click(() => {
        let x = Math.floor(Math.random() * 11 + 1);
        $("tbody").append(`<tr>
              <th scope="row">${JSON.parse(this.responseText)[x].name}</th>
              <td>${JSON.parse(this.responseText)[x].birthday}</td>
              <td>${JSON.parse(this.responseText)[x].email}</td>
              <td>${JSON.parse(this.responseText)[x].phone}</td>
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
      });
    }
  };
  xhttp.open("GET", "http://localhost:3000/users", true);
  xhttp.send();
}
loadOnClick();
