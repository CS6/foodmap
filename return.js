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
        title: "選擇空槽",
        icon: "icon-pin",
      },
      {
        title: "放回",
        icon: "icon-arrow-down",
      },
      {
        title: "費用計算",
        icon: "icon-wallet",
      },
      {
        title: "完成歸還",
        icon: "icon-trophy",
      }
    ],
    batterys: [],
    position: 0,
    selectedBattery: null,
    isSubmit: false,
    phone: '',
    password: '',
    countedown: 0,
    userToken: "",
    rentalStart: "",
    todayDate: "",
    rentalId: ""
  },
  methods: {
    goDone: function(e) {
      this.position++;
    },

    loginByPhone: function (e) {
      if (this.isSubmit || $(e.target).hasClass('disabled')) return;

      this.isSubmit = true;

      $.ajax({
        url: 'http://127.0.0.1:3000/user/session',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            method: "pin",
            mobile: this.phone,
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

        this.userToken = msg.result.UserSession.token;

        jQuery.getJSON("http://127.0.0.1:3000/server/slots").done(function (data) {

            self  = this;
            data.result.SlotStatusList.map(function(slot) {
              self.batterys.push({
                exist: (slot.battery !== null),
                full: (slot.battery && slot.battery.status == "FULL"),
                boxId: slot.boxId,
                pos: slot.slot
              });
            });

            this.position++;
        }.bind(this)).fail(function() {
          swal({
              title: "系統錯誤",
              text: "系統內部發生錯誤，請再試一次",
              type: "error",
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "重試",
            });
        }.bind(this));
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
    chooseBattery: function (idx) {
      if (this.batterys[idx].exist) return;
      this.selectedBattery = idx;
      this.position++;
      this.countedown = 5;
      var id = setInterval(function () {
        this.countedown--;
        if(this.countedown == 0) clearInterval(id);
      }.bind(this), 1000);
      setTimeout(function () {
        this.position++;
      }.bind(this), 5000);
    },
  },

  mounted: function () {
    this.mounted = true;
  }
})
