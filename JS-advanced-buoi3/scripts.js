let content = "";
let numberOfId = 0;
let page = 1;
let pagelimit = 5;
function getData() {
  $.get(
    "https://nateriver2204.herokuapp.com/users?_sort=id&_order=desc" +
      "_page=" +
      page +
      "&_limit=" +
      pagelimit,
    function appendData(users) {
      for (user of users) {
        content += `<tr>
                   <th>${user.name}</th>
                   <td>${user.birthday}</td>
                   <td>${user.email}</td>
                   <td>${user.phone}</td>
                   <td>
                      <a class="edit-btn" href="edit.html?${user.id}"><i class="fas fa-edit"></i> Chỉnh sửa</a>
                      <span>|</span>
                      <a class="trash-btn" data-id="${user.id}"><i class="fas fa-trash-alt"></i> Xóa</a>
                   </td>
                   <td><input type="checkbox" class="del-checkbox" data-del-id="${user.id}" ></input></td>
               </tr>`;
      }
      console.log(users);
    }
  ).done(function () {
    //append data to html
    $("tbody").html(content);
    //function del-btn
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
    // function del-all checkbox:checked

    $("#del-all").click(function () {
      let checkId = [];
      if ($(".del-checkbox:checked").length > 0) {
        $(".del-checkbox:checked").each(function () {
          checkId.push(+$(this).attr("data-del-id"));
          $("#del-btn").click(() => {
            for (let i = 0; i < checkId.length; i++) {
              $.ajax({
                type: "DELETE",
                url: "https://nateriver2204.herokuapp.com/users/" + checkId[i],
              });
            }
            $(this).parent().parent().remove();
            $(".delete-noti-wrapper").removeClass("active");
          });
        });
        $(".delete-noti-wrapper").addClass("active");
        $("#not-del-btn").click(() => {
          $("#del-btn").off("click");
          $(".delete-noti-wrapper").removeClass("active");
        });
      } else return;
    });
    // get number of id
    console.log(numberOfId);
  });
}

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
// prev next page
$("#prev-btn").click(function () {
  if (page > 1) {
    page--;
    console.log(page);
    getData();
  }
});
$("#next-btn").click(function () {
  if (page * pagelimit < numberOfId) {
    page++;
    console.log(page);
    getData();
  }
});
