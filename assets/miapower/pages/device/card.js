var app = new Vue({
  el: '#app',
  data: {
    mounted: false,
    cards: [
      {
        id: 123456798900,
      },
      {
        id: 123456798900,
      },
    ],
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
    openAddCard: function () {
      if (!this.enableCardClick) return;
      this.settingCard = true;
    },
    closeAddCard: function () {
      if (!this.enableCardClick) return;
      this.settingCard = false;
      this.settingCardLoading = false;
    },
  },
  mounted: function () {
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
