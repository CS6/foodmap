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

        this.userToken = msg.UserSession.token;

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
      if (!this.batterys[idx].exist) return;
      this.selectedBattery = idx;

      selectedBatt = this.batterys[idx];

      this.position++;

      jQuery.ajax({
        url: "http://127.0.0.1:3000/rentals",
        type: "POST",
        contentType:" application/json; charset=utf-8",
        dataType: "json",
        async: true,
        timeout: 30 * 1000,
        headers: {
          UserToken: this.userToken
        },
        data: JSON.stringify({
          boxId: selectedBatt.boxId,
          slot: selectedBatt.pos
        }),
        success: function(msg) {
          let Rental = msg.result.RentalInfo

          this.rentalId = Rental.rentalId.toString(16)
          this.todayDate = parseInt(moment().format("YYYYMMDD") ,10).toString(16)
          this.rentalStart = moment(Rental.start).format("YYYY-MM-DD HH:mm");
          this.position++;
        }.bind(this)
      })
    },
  },
  mounted: function () {
    this.mounted = true;
  }
})
