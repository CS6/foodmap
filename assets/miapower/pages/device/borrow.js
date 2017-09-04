var app = new Vue({
  el: '#app',
  data: {
    mounted: false,
    steps: [
      {
        title: "會員登入",
        icon: "icon-login",
      },
      {
        title: "費率介紹",
        icon: "icon-wallet",
      },
      {
        title: "選擇",
        icon: "icon-pin",
      },
      {
        title: "取出",
        icon: "icon-share-alt",
      },
      {
        title: "完成租借",
        icon: "icon-trophy",
      }
    ],
    // slots: [{ "boxId": "ed6e2834-4298-427c-bb8a-7459f1804ddb", "slot": "1", "battery": { "battId": "1234567890", "status": "CHARGING" } }, { "boxId": "ed6e2834-4298-427c-bb8a-7459f1804ddb", "slot": "2", "battery": null }, { "boxId": "ed6e2834-4298-427c-bb8a-7459f1804ddb", "slot": "3", "battery": null }, { "boxId": "ed6e2834-4298-427c-bb8a-7459f1804ddb", "slot": "4", "battery": null }],
    slots: [],
    position: 0,
    selectedBattery: null,
    isSubmit: false,
    phone: '',
    pin: '',
    token: '',
    countedown: 0,
  },
  watch: {
    position: function (position) {
      // 進入`選擇`頁面
      if (position === 2) {
        fetchSlotsInfo(function (msg) {
          this.slots = msg.result.SlotStatusList;
        }.bind(this));
      }

      // 進入`取出`頁面
      if (position === 3) {
        this.countedown = 5;
        var id = setInterval(function () {
          this.countedown--;
          if(this.countedown == 0) clearInterval(id);
        }.bind(this), 1000);
        setTimeout(function () {
          this.position++;
        }.bind(this), 5000);
      }
    },
  },
  methods: {
    // loginByPhone: function (e) {
    //   if (this.isSubmit || $(e.target).hasClass('disabled')) return;
    //   this.isSubmit = true;
    //   $.ajax({
    //     url: '/api/miapower/device/auth/login',
    //     type: 'POST',
    //     dataType: 'json',
    //     data: {phone: this.phone}
    //   })
    //   .done(function(msg) {
    //     if (msg.status) {
    //       this.position++;
    //     } else {
    //       swal({
    //         title: "Info",
    //         text: "該電話尚未註冊",
    //         type: "warning",
    //         confirmButtonColor: "#DD6B55",
    //         confirmButtonText: "重試",
    //       });
    //     }
    //   }.bind(this))
    //   .fail(function() {
    //     console.log("error");
    //   }.bind(this))
    //   .always(function() {
    //     this.isSubmit = false;
    //   }.bind(this));

    // },
    login: function (e) {
      if ($(e.currentTarget).hasClass('disabled')) return; 
      if (this.isSubmit) return;
      this.isSubmit = true;
      login(
        'pin',
        {
          mobile: this.phone,
          pinCode: this.pin,
        },
        function success (msg) {
          this.position++;
          this.token = msg.UserSession.token;
        }.bind(this),
        function fail (msg) {},
        function always (msg) {
          this.isSubmit = false;
        }.bind(this)
      )
    },
    chooseBattery: function (idx) {
      if (!this.slots[idx].battery) return;
      this.selectedBattery = idx;
      this.position++;
    },
  },
  mounted: function () {
    this.mounted = true;
  }
})

function login(method, data, successCb, failCb, alwaysCb) {
  data.method = method;
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/user/session',
    contentType: "application/json",
    data: JSON.stringify(data),
  })
  .done(function(msg) {
    if (msg.UserSession) {
      successCb(msg);
    } else {
      failCb(msg);
      swal({
        title: "Info",
        text: "該用戶尚未註冊",
        type: "warning",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "重試",
      });
    }
  })
  .fail(function(msg) {
    failCb(msg);
    swal({
      title: "Info",
      text: "網路錯誤，請稍候再試",
      type: "warning",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "回首頁",
      closeOnConfirm: false,
    },
    function(isConfirm){
      open('/zh/device', '_self');
    });
  })
  .always(function() {
    alwaysCb();
  });
}

function fetchSlotsInfo (successCb, failCb, alwaysCb) {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/server/slots',
  })
  .done(function(msg) {
    if (msg.meta.status === 200) {
      successCb(msg);
    } else {
      failCb(msg);
      swal({
        title: "Info",
        text: "網路錯誤，請稍候再試",
        type: "warning",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "回首頁",
        closeOnConfirm: false,
      },
      function(isConfirm){
        open('/zh/device', '_self');
      });
    }
  })
  .fail(function(msg) {
    failCb(msg);
    swal({
      title: "Info",
      text: "網路錯誤，請稍候再試",
      type: "warning",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "回首頁",
      closeOnConfirm: false,
    },
    function(isConfirm){
      open('/zh/device', '_self');
    });
  })
  .always(function() {
    alwaysCb();
  });
}
