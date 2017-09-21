var app = new Vue({
  el: '#app',
  data: {
    mounted: false,
    email: '',
    password: '',
    userToken: '',
  },
  methods: {

    login: function (e) {

      var superThis = this;
      $.ajax({
        url: 'http://127.0.0.1:3000/user/session',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            method: "pin",
            mobile: this.email,
            pinCode: this.password,
        })
      })
      .done(function(msg) {
        if(typeof msg.meta != 'undefined' && msg.meta.status !== 200) {
          return swal({
            title: "登入失敗",
            text: "您提供的資料無法登入，請再重試一次",
            type: "warning",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "重試",
          });
        }

        superThis.userToken = msg.result.UserSession.token;
        var expiredAt = new Date(String(msg.result.UserSession.expired_at)).toGMTString();
        console.log('expiredAt=>', expiredAt)
        console.log('superThis.userToken=>', superThis.userToken)
        document.cookie = "userToken=" + superThis.userToken + ";expires=" + expiredAt + ";path=/";
        console.log('cookie=>', document.cookie)
      }.bind(this))
      .fail(function() {
        swal({
            title: "系統錯誤",
            text: "系統內部發生錯誤，請再試一次",
            type: "error",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "重試",
          });
      }.bind(this))
      .always(function() {
        this.isSubmit = false;
      }.bind(this));

    },
  },

  mounted: function () {
    this.mounted = true;
  }
})