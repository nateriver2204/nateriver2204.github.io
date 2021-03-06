let numberOfId = 0;
let page = 1;
let pagelimit = 5;
let total = 0;
function getData() {
  let content = "";
  $.get(
    "https://nateriver2204.herokuapp.com/users?_sort=id&_order=desc" +
      "&_page=" +
      page +
      "&_limit=" +
      pagelimit,
    // append data
    function appendData(users) {
      // append users
      for (user of users) {
        content += `<tr id="row${user.id}">
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
    }
  ).done(function (data, textStatus, request) {
    //request xtotal count on json header
    total = request.getResponseHeader("x-Total-Count");
    console.log(total);

    //append data to html
    $("tbody").html(content);

    // append pagination
    for (let i = 1; i <= Math.floor(total / 5); i++) {
      console.log(total);
      $("#blank-li").append(`
      <li class="page-items"><a class="page-links">${i}</a></li>
      `);
    }

    // change page function
    $(".page-items").click(() => {
      console.log($(this).text());
    });

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
    let checkId = [];
    $("#del-all").click(function () {
      if ($(".del-checkbox:checked").length > 0) {
        $(".del-checkbox:checked").each(function () {
          checkId.push(+$(this).attr("data-del-id"));
          console.log(checkId);
        });
        $(".delete-noti-wrapper").addClass("active");
      } else return;
    });

    // del accept
    $("#del-btn").click(() => {
      for (let i = 0; i < checkId.length; i++) {
        $("#row" + checkId[i]).remove();
        $.ajax({
          type: "DELETE",
          url: "https://nateriver2204.herokuapp.com/users/" + checkId[i],
        });
      }
      checkId.length = 0;
      $(".delete-noti-wrapper").removeClass("active");
    });

    // off modal
    $("#not-del-btn").click(() => {
      $(".delete-noti-wrapper").removeClass("active");
      checkId.length = 0;
    });

    // pagination click
    $(".page-links").click(function () {
      $(".page-links").removeClass("active");
      $(this).addClass("active");
    });
  });
}
// get data first time
getData();

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

// get data smaller version
function getSmallerData() {
  let content = "";
  $.get(
    "https://nateriver2204.herokuapp.com/users?_sort=id&_order=desc" +
      "&_page=" +
      page +
      "&_limit=" +
      pagelimit,
    // append data
    function appendData(users) {
      // append users
      for (user of users) {
        content += `<tr id="row${user.id}">
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
    }
  ).done(function () {
    $("tbody").html(content);
  });
}

// prev next page btn
$("#prev-btn").click(() => {
  if (page > 1) {
    page--;
    $("tbody").html("");
    getSmallerData();
  }
});
$("#next-btn").click(() => {
  if (page * pagelimit < total) {
    page++;
    $("tbody").html("");
    getSmallerData();
  }
});
