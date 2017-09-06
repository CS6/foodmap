//if(!localStorage.getItem('userToken')) document.location.href="/user/login.html";
var parts = document.cookie.split("userToken=");
var userToken = (parts.length == 2) ? parts.pop().split(";").shift() : '';
if(!userToken) document.location.href='/user/login.html';

$.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
    };

var isSend = false;
$('#editUser').validator().submit(function(e) {
  var data = $(this).serializeObject();
  console.log('data=>', data)
  if (!e.isDefaultPrevented()) {
    if (isSend) return false;
    isSend = true;
    $.ajax({
      url: 'http://127.0.0.1:3000/user',
      type: 'PATCH',
      data: data,
      headers: {
        UserToken: localStorage.getItem('userToken')
      },
    })
    .done(function() {
      swal({
        title: "Info",
        text: "更新成功",
        type: "success",
        confirmButtonText: "確定",
        closeOnConfirm: true,
      }, function () {
        //open('/zh/device', '_self');
      });
    })
    .fail(function() {
      swal({
        title: "Info",
        text: "更新失敗",
        type: "warning",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確定",
        closeOnConfirm: true,
      });
    })
    .always(function() {
      isSend = false;
    });
    return false;
  }
});