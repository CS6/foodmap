// $('#map').tinyMap('panTo', [12.345678, 123.456789]);

var mapStyle = [{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
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
        "stylers": [{
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
        "stylers": [{
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
        "stylers": [{
            "visibility": "off"
        }]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
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
        "stylers": [{
            "color": "#7dcdcd"
        }]
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
        foundMe: function() {
            console.log(this.position.lat, this.position.lng)
            $('#map').tinyMap('panTo', [
                this.position.lat,
                this.position.lng,
                console.log(position.lat),
                console.log(this.position.lat),



            ]);


        },
        moveTo: function(stop) {
            $('#map').tinyMap('panTo', [
                stop.position.lat,
                stop.position.lng




            ]);

        },
        Tport: function() {
            var map = $('#map');
            map.tinyMap();

            // Get the instance from map.
            var instance = map.data('tinyMap');
            // Access map class
            // console.log(instance._markers)
            var map = instance.map;
            var center = map.getCenter();
            console.log(center.lat(), center.lng());
            return { lat: center.lat(), lng: center.lng() }
        },

        mapLoaded: function() {
            const self = this;
            var latLng = self.Tport()
            console.log(latLng)

            $.ajax({
                    type: 'GET',
                    ///stations?centerLat=25.1681728&centerLng=121.4459958&distance=1000000
                    url: 'http://localhost:3000/stations?centerLat=' +
                        latLng.lat + '&centerLng=' + latLng.lng + '&distance=1000000',
                    //  url: 'http://localhost:3000/stations',
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
                        //Tport(msg);
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
        swalInfo: function(idx) {
            const data = this.stops[idx]
            swal({
                html: true,
                //title: "站點資訊",
                title: "店家資訊",
                //text: "機台名稱: " + data.name +
                text: "店名: " + data.name +
                    "<br>地點: " + data.address +
                    //  "<br>可歸還的槽位: " + data.status.emptySlots +
                    //"<br>可租借的電池數: " + data.status.availableBatteries,
                    "<br>圖片: <img src=\"" + data.status.emptySlots + "\" width=\"100px\"/>" +
                    "<br>讚: " + data.status.availableBatteries,
                type: "info",
                confirmButtonColor: "#5bc0de",
                confirmButtonText: "關閉",
                closeOnConfirm: false,
            })
        },

        setStopsInMap: function(locations) {
            $(locations).each(function(i, e) {



                //console.log(e);
                // console.log(pointX);
                // console.log(pointY);
                // console.log(e.position.lat);
                // console.log(e.position.lng);

                $('#map').tinyMap('modify', {
                    'marker': [{
                        'addr': [
                            e.position.lat,
                            e.position.lng,

                            //console.log(e.position.lat),
                            //console.log(e.position.lng)
                        ],
                        'animation': 'DROP',
                        'text': '<strong>' + e.address + '</strong>',
                        'icon': {
                            url: '/assets/miapower/images/battery_pin.png',
                            scaledSize: [45, 45]
                        },
                        'event': {
                            'click': function(e) {
                                //////////////////
                                //pointX = addr[0]
                                //pointY = addr[1]
                                // pointX = e.position.lat;
                                //pointY = e.position.lng;
                                // alert('緯度: ' + e.latLng.lat() + ', 經度: ' + e.latLng.lng());
                                // console.log(this);
                                this.swalInfo(i);
                                this.scrollToStop(i);
                                //console.log(this);
                                // console.log("AAAAA");



                            }.bind(this),
                            'mouseover': function(e) {

                                    // pointBX = e.position.lat;
                                    //pointBY = e.position.lng;
                                    console.log('B2')
                                        //  getDistance(pointX, pointY, pointBX, pointBY)
                                        //getDistance(24.1538, 120.68678, 24.15403, 120.67708)
                                        //   console.log(e);
                                        //console.log(i); //站號

                                    //  console.log(this);
                                    //this.swalInfo(i);資訊彈窗
                                    this.scrollToStop(i); //捲動側邊蘭

                                }.bind(this) //用於榜定滑鼠移動

                        }
                    }]
                });
            }.bind(this));
        },

        /////////
        scrollToStop: function(idx) {
            var item = $('.loc-slider .loc-item[data-idx=' + idx + ']');
            var itemOffsetTop = item.offset().top;
            $('.loc-slider').animate({
                scrollTop: itemOffsetTop + $('.loc-slider').scrollTop() - 50
            }, 300);

        }
    },

    mounted: function() {
        const self = this;
        console.log(this);
        $('#map').tinyMap({
            'center': '國立臺中科技大學',
            'zoom': 18,
            'autoLocation': function(loc) {
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