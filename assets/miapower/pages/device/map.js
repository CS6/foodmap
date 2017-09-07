// $('#map').tinyMap('panTo', [12.345678, 123.456789]);

var mapStyle = [
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#e0efef"
        }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "hue": "#1900ff"
        },
        {
            "color": "#c0e8e8"
        }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
        {
            "lightness": 100
        },
        {
            "visibility": "simplified"
        }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "lightness": 700
        }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "color": "#7dcdcd"
        }
    ]
  }
];

$.fn.tinyMapConfigure({
  // Google Maps API URL
//   'api': '//maps.googleapis.com/maps/api/js',
  // Google Maps API Version
//   'v': '3.21',
  // Google Maps API Key，預設 null
  'key': 'AIzaSyAvmPNE1IW6XrXEeNXkLqj7fERGyFvEtaE',
  // 使用的地圖語言
//   'language': 'zh‐TW',
  // 載入的函式庫名稱，預設 null
//   'libraries': 'adsense,drawing,geometry...',
  // 使用個人化的地圖，預設 false
//   'signed_in': true|false,
  // MarkerClustererPlus.js 路徑
  // 預設 'https://cdn.essoduke.org/js/tinyMap/markerclusterer.js'
  // 建議下載至自有主機，避免讀取延遲造成無法使用。
//   'clusterer': 'path/to/markerclusterer.js',
  // MarkerWithLabel.js 路徑
  // 預設 'https://cdn.essoduke.org/js/tinyMap/markerwithlabel.js'
  // 建議下載至自有主機，避免讀取延遲造成無法使用。
//   'withLabel': '//cdn.essoduke.org/js/tinyMap/markerwithlabel.js'
});

var app = new Vue({
  el: '#app',
  data: {
    stops: [],
    position: {
      lat: '',
      lng: ''
    }
  },

  methods: {
    foundMe: function () {
      console.log(this.position.lat, this.position.lng)
      $('#map').tinyMap('panTo', [
        this.position.lat,
        this.position.lng
      ]);
    },
    moveTo: function (stop) {
      $('#map').tinyMap('panTo', [
        stop.position.lat,
        stop.position.lng
      ]);
    },
    mapLoaded: function () {
      const self = this;
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/stations',
        contentType: "application/json",
      })
      .done(function(msg) {
        if (msg.meta.status !== 200) {
          return swal({
            title: "Info",
            text: "該用戶尚未註冊",
            type: "warning",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "重試",
          });
        }
        self.stops = msg.result.StationList;
        self.setStopsInMap(msg.result.StationList);
      })
      .fail(function(msg) {
        return swal({
          title: "Info",
          text: "網路錯誤，請稍候再試",
          type: "warning",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "回首頁",
          closeOnConfirm: false,
        })
      })
    },
    swalInfo: function (idx) {
      const data = this.stops[idx]
      swal({
        html: true,
        title: "站點資訊",
        text  :  "機台名稱: " + data.name + 
        "<br>地點: " + data.address +
        "<br>可歸還的槽位: " + data.status.emptySlots + 
        "<br>可租借的電池數: " + data.status.availableBatteries,
        type: "info",
        confirmButtonColor: "#5bc0de",
        confirmButtonText: "關閉",
        closeOnConfirm: false,
      })
    },
    setStopsInMap: function (locations) {
      $(locations).each(function(i, e){
        $('#map').tinyMap('modify', {
          'marker': [{
            'addr': [
              e.position.lat,
              e.position.lng
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
                // console.log(this);
                this.swalInfo(i);
                this.scrollToStop(i);
              }.bind(this),
            },
          }]
        });
      }.bind(this));
    },
    scrollToStop: function (idx) {
      var item = $('.loc-slider .loc-item[data-idx='+idx+']');
      var itemOffsetTop = item.offset().top;
      $('.loc-slider').animate({
  			scrollTop: itemOffsetTop + $('.loc-slider').scrollTop() - 50
  		}, 300);
    }
  },
  mounted: function () {
    const self = this;
    console.log(this);
    $('#map').tinyMap({
      'center': '台北市信義區台北101',
      'zoom'  : 15,
      'autoLocation': function (loc) {
          self.position.lat = loc.coords.latitude;
          self.position.lng = loc.coords.longitude;
      },
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