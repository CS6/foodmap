var app = new Vue({
  el: '#app',
  data: {
    mounted: false,
    rentalRecords: [],
  },
  methods: {
    dateFormat: function (date) {
      return moment(date).format('YYYY/MM/DD');
    },
    dateDiff: function (end, start) {
      return moment(end).diff(moment(start))/(60*60*1000);
    },
    getHistory: function (e) {
      $.ajax({
        url: 'http://127.0.0.1:3000/user/rentals',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: {
          UserToken: localStorage.getItem('userToken')
        },
      })
      .done(function(data) {
        console.log('history==>', data)
        if(typeof data.meta != 'undefined' && data.meta.status !== 200) {
          return swal({
            title: "查詢失敗",
            text: "請再重試一次",
            type: "warning",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "重試",
          });
        }
        this.rentalRecords = data.result.RentalRecords;

        // this.userToken = msg.result.UserSession.token;
        // localStorage.setItem('userToken', this.userToken);
        // document.location.href="/user/menu.html"; 
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
    this.getHistory();
    this.mounted = true;
  }
})