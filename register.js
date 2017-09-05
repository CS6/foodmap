// if (registerFail) {
//   swal({
//     title: "Info",
//     text: "此帳戶資訊已被註冊過，如果是您的請聯絡我們",
//     type: "warning",
//     confirmButtonColor: "#DD6B55",
//     confirmButtonText: "回首頁",
//     closeOnConfirm: false,
//   },
//   function(isConfirm){
//     open('/zh/device', '_self');
//   });
// }
var app = new Vue({
  el: '#app',
  data: {
    mounted: false,
    phone: '',
    pin: '',
    email: '',
    idNumber: '',
    steps: [
      {
        title: "使用條款",
        icon: "icon-direction",
      },
      {
        title: "填寫手機",
        icon: "icon-screen-smartphone",
      },
      {
        title: "驗證手機",
        icon: "icon-user-following",
      },
      {
        title: "基本資料",
        icon: "icon-user",
      },
      {
        title: "完成註冊",
        icon: "icon-trophy",
      }
    ],
    position: 0,
  },
  methods: {
    nextStep: function (e) {
      if (!$(e.currentTarget).hasClass('disabled')) {
        this.position++;
      }
    },
    register: function (e) {
      if ($(e.currentTarget).hasClass('disabled')) return; 
      var data = {
        // 所有欄位都是必填欄位
        'mobile': this.phone,
        'pin': this.pin,
        'email': this.email,
        'idNumber': this.idNumber,
      };
      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:3000/users",
        data: JSON.stringify(data),
        success: function (response) {
          console.log(response.meta.status);
          if (response.meta.status === 201) {
            // 成功註冊，到完成頁面
            this.position++;
          } else {
            swal({
              title: "Info",
              text: "此帳戶資訊已被註冊過，如果是您的請聯絡我們",
              type: "warning",
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "回首頁",
              closeOnConfirm: false,
            },
            function(isConfirm){
              open('/', '_self');
            });
          }
        }.bind(this),
        error: function () {
          swal({
            title: "Info",
            text: "網路錯誤，請稍候再試",
            type: "warning",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "回首頁",
            closeOnConfirm: false,
          },
          function(isConfirm){
            open('/', '_self');
          });
        }
      });
    }
  },
  created: function () {
    // var position = parseInt(location.hash.replace('#', ''));
    // if (!position || position > 4) return;
    // this.position = position;
  },
  mounted: function () {
    this.mounted = true;
  }
})
