function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      for (i = 0; i < users.length; i++) {
        $("tbody").append(`<tr>
              <th scope="row">${users[i].name}</th>
              <td>${users[i].birthday}</td>
              <td>${users[i].email}</td>
              <td>${users[i].phone}</td>
              <td>
                <a class="edit-btn" href="edit.html?${users[i].id}"
                  ><i class="fas fa-edit"></i> Chỉnh sửa
                </a>
                <span>|</span>
                <a class="trash-btn" data-id="${users[i].id}"
                  ><i class="fas fa-trash-alt"></i> Xóa</a
                >                
              </td>
              <td><input type="checkbox" class="del-checkbox" data-del-id="${users[i].id}" onclick="getId(${users[i].id})"></input></td>              
            </tr>`);
      }
    }
    // del info trash bin
    $(".trash-btn").click(function () {
      let delId = $(this).attr("data-id");
      $(".delete-noti-wrapper").addClass("active");
      $("#not-del-btn").click(() => {
        $(".delete-noti-wrapper").removeClass("active");
      });
      $("#del-btn")
        .off("click")
        .click(() => {
          $(".delete-noti-wrapper").removeClass("active");
          $.ajax({
            type: "DELETE",
            url: "https://nateriver2204.herokuapp.com/users/" + delId,
          });
          $(this).parent().parent().remove();
        });
    });
    // del info checkbox

    // $(".del-checkbox").click(function () {
    //   listId.push($(this).attr("data-del-id"));
    //   console.log(listId);

    //     $("#del-all").click(() => {
    //       if ($(":checked").length > 0) {
    //         $(".delete-noti-wrapper").addClass("active");
    //         $("#not-del-btn").click(() => {
    //           $(".delete-noti-wrapper").removeClass("active");
    //         });
    //         $("#del-btn")
    //           .off("click")
    //           .click(() => {
    //             $(".delete-noti-wrapper").removeClass("active");
    //             $.ajax({
    //               type: "DELETE",
    //               url: "https://nateriver2204.herokuapp.com/users/" + delId,
    //             });

    //             $(this).parent().parent().remove();
    //           });
    //       }
    //     });
    // });
  };
  xhttp.open(
    "GET",
    "https://nateriver2204.herokuapp.com/users?_sort=id&_order=desc",
    true
  );
  xhttp.send();
}
loadDoc();

// add info

// onclick="removeUser(${users[i].id}, this)" cho moi button
let countClick = 0;
$("#check-all").click(() => {
  countClick++;
  if (countClick % 2 == 1) {
    $(".del-checkbox").prop("checked", true);
  } else {
    $(".del-checkbox").prop("checked", false);
  }
});
// show id function
let listId = [];

function getId(id) {
  listId.push(id);
  console.log(listId);
}
$("#del-all").click(() => {
  for (i = 0; i < listId.length; i++) {
    console.log($("[data-del-id = i]"));
  }
});
