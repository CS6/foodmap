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
  if (!e.isDefaultPrevented()) {
    if (isSend) return false;
    isSend = true;
    $.ajax({
      url: '/api/user/edit',
      type: 'POST',
      data: data
    })
    .done(function() {
      swal({
        title: "Info",
        text: "更新成功",
        type: "success",
        confirmButtonText: "確定",
        closeOnConfirm: true,
      }, function () {
        open('/zh/device', '_self');
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