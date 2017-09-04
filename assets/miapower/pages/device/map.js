var app = new Vue({
  el: '#app',
  data: {
    stops: MRT,
  },
  methods: {
    mapLoaded: function () {
      this.setStopsInMap(MRT);
    },
    setStopsInMap: function (locations) {
      $(locations).each(function(i, e){
        $('#map').tinyMap('modify', {
          'marker': [{
            'addr': [
              e.latitude,
              e.longitude
            ],
            'animation': 'DROP',
            'text': '<strong>' + e.address + '</strong>',
            'icon': {
              url: '/assets/miapower/images/battery_pin.png',
              scaledSize: [45, 45]
            },
            'event': {
              'click': function (e) {
                // alert('緯度: ' + e.latLng.lat() + ', 經度: ' + e.latLng.lng());
                console.log(this);
                this.scrollToStop(i);
              }.bind(this),
            }
          }]
        });
      }.bind(this));
    },
    scrollToStop: function (idx) {
      var item = $('.loc-slider .loc-item[data-idx='+idx+']');
      console.log(item);
      var itemOffsetTop = item.offset().top;
      $('.loc-slider').animate({
  			scrollTop: itemOffsetTop + $('.loc-slider').scrollTop() - 50
  		}, 300);
    }
  },
  mounted: function () {
    console.log(this);
    $('#map').tinyMap({
      'center': '台北市信義區台北101',
      'zoom'  : 15,
      // 'autoLocation': function (loc) {
      //     console.log(loc);
      // },
      // 'autoLocation': true,
      'mapTypeControlOptions': {
        'styles': mapStyle,
      },
      disableDefaultUI: true,
      'event': {
        'idle': this.mapLoaded
      }
    });
  },
});

// $('#map').tinyMap('panTo', [12.345678, 123.456789]);
