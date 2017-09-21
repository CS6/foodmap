var app = new Vue({
  el: '#app',
  data: {
    mounted: false,
    cards: [],
    userToken: "",
    settingCard: false,
    settingCardLoading: false,
    enableCardClick: true,
  },
  watch: {
    settingCard: function (val) {
      this.enableCardClick = false;
      if (val) {
        $('html, body, .menu-panel').scrollTop(0);
        this.ani.play();
      } else {
        this.ani.settings.direction = 'reverse';
        this.ani.play();
      }
    },
  },
  methods: {
    checkToken: function () {
      const parts = document.cookie.split("userToken=");
      const userToken = (parts.length == 2) ? parts.pop().split(";").shift() : '';
      if(!userToken) document.location.href='/user/login.html';
    },
    getCards: function () {
      let superThis = this;
      $.ajax({
        url: 'http://127.0.0.1:3000/user/cards',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        headers: {
          UserToken: this.userToken
        },
      })
      .done(function(data) {
        data.result.UserCardList.forEach(function(item) {
          superThis.cards.push({ id: item.cardNumber })
        })
      })
    },
    openAddCard: function () {
      if (!this.enableCardClick) return;
      this.settingCard = true;

      $.ajax({
        url: 'http://127.0.0.1:3000/user/cards',
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
        }),
        headers: {
          UserToken: this.userToken
        },
      })
    },
    closeAddCard: function () {
      if (!this.enableCardClick) return;
      this.settingCard = false;
      this.settingCardLoading = false;
    },
  },
  mounted: function () {
    this.checkToken();
    this.getCards();
    this.mounted = true;
    var offset = $('.yy-card-empty').offset();
    var targetWidth = 600;
    var targetHeight = 420;
    var targetOffsetTop = 180;
    var targetOffsetLeft = ($(window).width()-targetWidth)/2;
    this.ani = anime({
      targets: '.yy-card-empty',
      width: targetWidth,
      height: targetHeight,
      translateX: (offset.left-targetOffsetLeft) * -1,
      translateY: (offset.top-targetOffsetTop) * -1,
      direction: 'normal',
      duration: 680,
      easing: 'easeOutElastic',
      autoplay: false,
      complete: function () {
        this.enableCardClick = true;
      }.bind(this),
    });
  }
})