/*
var MRT = [
  {
  		"id": "030",
  		"name": "南港軟體園區",
  		"line": "文山內湖線",
  		"address": "115台灣台北市南港區捷運南港軟體園區站",
  		"latitude": 25.059904,
  		"longitude": 121.615952,
      	expend: false,
  	},
  	{
  		"id": "031",
  		"name": "南港展覽館",
  		"line": "文山內湖線",
  		"address": "115台灣台北市南港區捷運南港展覽館站",
  		"latitude": 25.055368,
  		"longitude": 121.6176,
		expend: false,	
	},
  	{
  		"id": "029",
  		"name": "東湖",
  		"line": "文山內湖線",
  		"address": "114台灣台北市內湖區捷運東湖站",
  		"latitude": 25.067247,
  		"longitude": 121.611504,
      expend: false,
  	},
  	{
  		"id": "028",
  		"name": "葫洲",
  		"line": "文山內湖線",
  		"address": "114台灣台北市內湖區捷運葫洲站",
  		"latitude": 25.072701,
  		"longitude": 121.607158,
      expend: false,
  	},
  	{
  		"id": "027",
  		"name": "大湖公園",
  		"line": "文山內湖線",
  		"address": "114台灣台北市內湖區捷運大湖公園站",
  		"latitude": 25.083844,
  		"longitude": 121.60214
,
expend: false,  	},
  	{
  		"id": "026",
  		"name": "內湖",
  		"line": "文山內湖線",
  		"address": "114台灣台北市內湖區捷運內湖站",
  		"latitude": 25.08366,
  		"longitude": 121.594407,
      expend: false,
  	},
  	{
  		"id": "025",
  		"name": "文德",
  		"line": "文山內湖線",
  		"address": "114台灣台北市內湖區捷運文德站",
  		"latitude": 25.078531,
  		"longitude": 121.584761,
      expend: false,
  	},
  	{
  		"id": "024",
  		"name": "港墘",
  		"line": "文山內湖線",
  		"address": "114台灣台北市內湖區捷運港墘站",
  		"latitude": 25.080027,
  		"longitude": 121.57508
,
expend: false,  	},
  	{
  		"id": "023",
  		"name": "西湖",
  		"line": "文山內湖線",
  		"address": "114台灣台北市內湖區捷運西湖站",
  		"latitude": 25.082133,
  		"longitude": 121.567213,
      expend: false,
  	},
  	{
  		"id": "022",
  		"name": "劍南路",
  		"line": "文山內湖線",
  		"address": "104台灣台北市中山區捷運劍南路站",
  		"latitude": 25.084853,
  		"longitude": 121.555592,
      expend: false,
  	},
  	{
  		"id": "021",
  		"name": "大直",
  		"line": "文山內湖線",
  		"address": "104台灣台北市中山區捷運大直站",
  		"latitude": 25.079476,
  		"longitude": 121.546894,
      expend: false,
  	},
  	{
  		"id": "007",
  		"name": "松山機場",
  		"line": "文山內湖線",
  		"address": "105台灣台北市松山區捷運松山機場站",
  		"latitude": 25.063,
  		"longitude": 121.551995,
      expend: false,
  	},
  	{
  		"id": "008",
  		"name": "中山國中",
  		"line": "文山內湖線",
  		"address": "105台灣台北市松山區捷運中山國中站",
  		"latitude": 25.060848,
  		"longitude": 121.544226,
      expend: false,
  	},
  	{
  		"id": "009",
  		"name": "南京東路",
  		"line": "文山內湖線",
  		"address": "104台灣台北市中山區捷運南京東路站",
  		"latitude": 25.052317,
  		"longitude": 121.544011,
      expend: false,
  	},
  	{
  		"id": "010",
  		"name": "忠孝復興",
  		"line": "文山內湖線",
  		"address": "106台灣台北市大安區捷運忠孝復興站",
  		"latitude": 25.041629,
  		"longitude": 121.543767,
      expend: false,
  	},
  	{
  		"id": "011",
  		"name": "大安",
  		"line": "文山內湖線",
  		"address": "106台灣台北市大安區捷運大安站",
  		"latitude": 25.033254,
  		"longitude": 121.543565,
      expend: false,
  	},
  	{
  		"id": "012",
  		"name": "科技大樓",
  		"line": "文山內湖線",
  		"address": "106台灣台北市大安區捷運科技大樓站",
  		"latitude": 25.026124,
  		"longitude": 121.543437,
      expend: false,
  	},
  	{
  		"id": "013",
  		"name": "六張犁",
  		"line": "文山內湖線",
  		"address": "106台灣台北市大安區捷運六張犁站",
  		"latitude": 25.023739,
  		"longitude": 121.553004,
      expend: false,
  	},
  	{
  		"id": "014",
  		"name": "麟光",
  		"line": "文山內湖線",
  		"address": "106台灣台北市大安區捷運麟光站",
  		"latitude": 25.018535,
  		"longitude": 121.558791,
      expend: false,
  	},
  	{
  		"id": "015",
  		"name": "辛亥",
  		"line": "文山內湖線",
  		"address": "116台灣台北市文山區捷運辛亥站",
  		"latitude": 25.005475,
  		"longitude": 121.557107,
      expend: false,
  	},
  	{
  		"id": "016",
  		"name": "萬芳醫院",
  		"line": "文山內湖線",
  		"address": "116台灣台北市文山區捷運萬芳醫院站",
  		"latitude": 24.999385,
  		"longitude": 121.558151,
      expend: false,
  	},
  	{
  		"id": "017",
  		"name": "萬芳社區",
  		"line": "文山內湖線",
  		"address": "116台灣台北市文山區捷運萬芳社區站",
  		"latitude": 24.998585,
  		"longitude": 121.568102,
      expend: false,
  	},
  	{
  		"id": "018",
  		"name": "木柵",
  		"line": "文山內湖線",
  		"address": "116台灣台北市文山區捷運木柵站",
  		"latitude": 24.99824,
  		"longitude": 121.573145,
      expend: false,
  	},
  	{
  		"id": "019",
  		"name": "動物園",
  		"line": "文山內湖線",
  		"address": "116台灣台北市文山區捷運動物園站",
  		"latitude": 24.998197,
  		"longitude": 121.579338,
      expend: false,
  	},
  	{
  		"id": "071",
  		"name": "淡水",
  		"line": "淡水、信義線",
  		"address": "251台灣新北市淡水區捷運淡水站",
  		"latitude": 25.167817,
  		"longitude": 121.44556
,
expend: false,  	},
  	{
  		"id": "070",
  		"name": "紅樹林",
  		"line": "淡水、信義線",
  		"address": "251台灣新北市淡水區捷運紅樹林站",
  		"latitude": 25.154042,
  		"longitude": 121.458871,
      expend: false,
  	},
  	{
  		"id": "069",
  		"name": "竹圍",
  		"line": "淡水、信義線",
  		"address": "251台灣新北市淡水區捷運竹圍站",
  		"latitude": 25.13694,
  		"longitude": 121.459479,
      expend: false,
  	},
  	{
  		"id": "068",
  		"name": "關渡",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運關渡站",
  		"latitude": 25.125632,
  		"longitude": 121.467102,
      expend: false,
  	},
  	{
  		"id": "067",
  		"name": "忠義",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運忠義站",
  		"latitude": 25.130969,
  		"longitude": 121.473409,
      expend: false,
  	},
  	{
  		"id": "066",
  		"name": "復興崗",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運復興崗站",
  		"latitude": 25.137473,
  		"longitude": 121.485444,
      expend: false,
  	},
  	{
  		"id": "064",
  		"name": "北投",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運北投站",
  		"latitude": 25.13184,
  		"longitude": 121.498632,
      expend: false,
  	},
  	{
  		"id": "065",
  		"name": "新北投",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運新北投站",
  		"latitude": 25.136932,
  		"longitude": 121.502529,
      expend: false,
  	},
  	{
  		"id": "063",
  		"name": "奇岩",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運奇岩站",
  		"latitude": 25.125491,
  		"longitude": 121.501132,
      expend: false,
  	},
  	{
  		"id": "062",
  		"name": "唭哩岸",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運唭哩岸站",
  		"latitude": 25.120871,
  		"longitude": 121.506252,
      expend: false,
  	},
  	{
  		"id": "061",
  		"name": "石牌",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運石牌站",
  		"latitude": 25.114523,
  		"longitude": 121.515559,
      expend: false,
  	},
  	{
  		"id": "060",
  		"name": "明德",
  		"line": "淡水、信義線",
  		"address": "112台灣台北市北投區捷運明德站",
  		"latitude": 25.10972,
  		"longitude": 121.518848,
      expend: false,
  	},
  	{
  		"id": "059",
  		"name": "芝山",
  		"line": "淡水、信義線",
  		"address": "111台灣台北市士林區捷運芝山站",
  		"latitude": 25.103059,
  		"longitude": 121.522513,
      expend: false,
  	},
  	{
  		"id": "058",
  		"name": "士林",
  		"line": "淡水、信義線",
  		"address": "111台灣台北市士林區捷運士林站",
  		"latitude": 25.093535,
  		"longitude": 121.526229,
      expend: false,
  	},
  	{
  		"id": "057",
  		"name": "劍潭",
  		"line": "淡水、信義線",
  		"address": "111台灣台北市士林區捷運劍潭站",
  		"latitude": 25.084873,
  		"longitude": 121.525077,
      expend: false,
  	},
  	{
  		"id": "056",
  		"name": "圓山",
  		"line": "淡水、信義線",
  		"address": "103台灣台北市大同區捷運圓山站",
  		"latitude": 25.071353,
  		"longitude": 121.520118,
      expend: false,
  	},
  	{
  		"id": "055",
  		"name": "民權西路",
  		"line": "淡水、信義線",
  		"address": "103台灣台北市大同區捷運民權西路站",
  		"latitude": 25.062905,
  		"longitude": 121.519319,
      expend: false,
  	},
  	{
  		"id": "054",
  		"name": "雙連",
  		"line": "淡水、信義線",
  		"address": "104台灣台北市中山區捷運雙連站",
  		"latitude": 25.057804,
  		"longitude": 121.520627,
      expend: false,
  	},
  	{
  		"id": "053",
  		"name": "中山",
  		"line": "淡水、信義線",
  		"address": "104台灣台北市中山區捷運中山站",
  		"latitude": 25.052685,
  		"longitude": 121.520391,
      expend: false,
  	},
  	{
  		"id": "051",
  		"name": "台北車站",
  		"line": "淡水、信義線",
  		"address": "100台灣台北市中正區捷運台北車站",
  		"latitude": 25.046254,
  		"longitude": 121.517532,
      expend: false,
  	},
  	{
  		"id": "050",
  		"name": "台大醫院",
  		"line": "淡水、信義線",
  		"address": "100台灣台北市中正區捷運台大醫院站",
  		"latitude": 25.041256,
  		"longitude": 121.51604
,
expend: false,  	},
  	{
  		"id": "042",
  		"name": "中正紀念堂",
  		"line": "淡水、信義線",
  		"address": "100台灣台北市中正區捷運中正紀念堂站",
  		"latitude": 25.032729,
  		"longitude": 121.51827
,
expend: false,  	},
  	{
  		"id": "134",
  		"name": "東門",
  		"line": "淡水、信義線",
  		"address": "100台灣台北市中正區捷運東門站",
  		"latitude": 25.033847,
  		"longitude": 121.528739,
      expend: false,
  	},
  	{
  		"id": "103",
  		"name": "大安森林公園",
  		"line": "淡水、信義線",
  		"address": "106台灣台北市大安區捷運大安森林公園站",
  		"latitude": 25.033534,
  		"longitude": 121.534869,
      expend: false,
  	},
  	{
  		"id": "011",
  		"name": "大安",
  		"line": "淡水、信義線",
  		"address": "106台灣台北市大安區捷運大安站",
  		"latitude": 25.033254,
  		"longitude": 121.543565,
      expend: false,
  	},
  	{
  		"id": "101",
  		"name": "信義安和",
  		"line": "淡水、信義線",
  		"address": "106台灣台北市大安區捷運信義安和站",
  		"latitude": 25.033116,
  		"longitude": 121.552798,
      expend: false,
  	},
  	{
  		"id": "100",
  		"name": "台北101/世貿",
  		"line": "淡水、信義線",
  		"address": "110台灣台北市信義區捷運台北101/世貿站",
  		"latitude": 25.032933,
  		"longitude": 121.562591,
      expend: false,
  	},
  	{
  		"id": "099",
  		"name": "象山",
  		"line": "淡水、信義線",
  		"address": "110台灣台北市信義區捷運象山站",
  		"latitude": 25.032765,
  		"longitude": 121.570354,
      expend: false,
  	},
  	{
  		"id": "043",
  		"name": "小南門",
  		"line": "小南門、新店線",
  		"address": "100台灣台北市中正區捷運小南門站",
  		"latitude": 25.035546,
  		"longitude": 121.510857,
      expend: false,
  	},
  	{
  		"id": "041",
  		"name": "古亭",
  		"line": "小南門、新店線",
  		"address": "100台灣台北市中正區捷運古亭站",
  		"latitude": 25.026356,
  		"longitude": 121.522872,
      expend: false,
  	},
  	{
  		"id": "040",
  		"name": "台電大樓",
  		"line": "小南門、新店線",
  		"address": "106台灣台北市大安區捷運台電大樓站",
  		"latitude": 25.020724,
  		"longitude": 121.528167,
      expend: false,
  	},
  	{
  		"id": "039",
  		"name": "公館",
  		"line": "小南門、新店線",
  		"address": "106台灣台北市大安區捷運公館站",
  		"latitude": 25.014907,
  		"longitude": 121.534215,
      expend: false,
  	},
  	{
  		"id": "038",
  		"name": "萬隆",
  		"line": "小南門、新店線",
  		"address": "116台灣台北市文山區捷運萬隆站",
  		"latitude": 25.001853,
  		"longitude": 121.539051,
      expend: false,
  	},
  	{
  		"id": "037",
  		"name": "景美",
  		"line": "小南門、新店線",
  		"address": "116台灣台北市文山區捷運景美站",
  		"latitude": 24.992848,
  		"longitude": 121.540782,
      expend: false,
  	},
  	{
  		"id": "036",
  		"name": "大坪林",
  		"line": "小南門、新店線",
  		"address": "231台灣新北市新店區捷運大坪林站",
  		"latitude": 24.982899,
  		"longitude": 121.541351,
      expend: false,
  	},
  	{
  		"id": "035",
  		"name": "七張",
  		"line": "小南門、新店線",
  		"address": "231台灣新北市新店區捷運七張站",
  		"latitude": 24.975168,
  		"longitude": 121.542942,
      expend: false,
  	},
  	{
  		"id": "032",
  		"name": "小碧潭",
  		"line": "小南門、新店線",
  		"address": "231台灣新北市新店區捷運小碧潭站",
  		"latitude": 24.971906,
  		"longitude": 121.530338,
      expend: false,
  	},
  	{
  		"id": "034",
  		"name": "新店區公所",
  		"line": "小南門、新店線",
  		"address": "231台灣新北市新店區捷運新店區公所站",
  		"latitude": 24.967393,
  		"longitude": 121.541309,
      expend: false,
  	},
  	{
  		"id": "033",
  		"name": "新店",
  		"line": "小南門、新店線",
  		"address": "231台灣新北市新店區捷運新店站",
  		"latitude": 24.957855,
  		"longitude": 121.537583,
      expend: false,
  	},
  	{
  		"id": "048",
  		"name": "南勢角",
  		"line": "中和、蘆洲、新莊線",
  		"address": "235台灣新北市中和區捷運南勢角站",
  		"latitude": 24.990044,
  		"longitude": 121.509237,
      expend: false,
  	},
  	{
  		"id": "047",
  		"name": "景安",
  		"line": "中和、蘆洲、新莊線",
  		"address": "235台灣新北市中和區捷運景安站",
  		"latitude": 24.993905,
  		"longitude": 121.505113,
      expend: false,
  	},
  	{
  		"id": "046",
  		"name": "永安市場",
  		"line": "中和、蘆洲、新莊線",
  		"address": "235台灣新北市中和區捷運永安市場站",
  		"latitude": 25.002876,
  		"longitude": 121.51123
,
expend: false,  	},
  	{
  		"id": "045",
  		"name": "頂溪",
  		"line": "中和、蘆洲、新莊線",
  		"address": "234台灣新北市永和區捷運頂溪站",
  		"latitude": 25.01382,
  		"longitude": 121.515484,
      expend: false,
  	},
  	{
  		"id": "041",
  		"name": "古亭",
  		"line": "中和、蘆洲、新莊線",
  		"address": "100台灣台北市中正區捷運古亭站",
  		"latitude": 25.026356,
  		"longitude": 121.522872,
      expend: false,
  	},
  	{
  		"id": "134",
  		"name": "東門",
  		"line": "中和、蘆洲、新莊線",
  		"address": "100台灣台北市中正區捷運東門站",
  		"latitude": 25.033847,
  		"longitude": 121.528739,
      expend: false,
  	},
  	{
  		"id": "089",
  		"name": "忠孝新生",
  		"line": "中和、蘆洲、新莊線",
  		"address": "106台灣台北市大安區捷運忠孝新生站",
  		"latitude": 25.042355,
  		"longitude": 121.532904,
      expend: false,
  	},
  	{
  		"id": "132",
  		"name": "松江南京",
  		"line": "中和、蘆洲、新莊線",
  		"address": "104台灣台北市中山區捷運松江南京站",
  		"latitude": 25.052015,
  		"longitude": 121.533075,
      expend: false,
  	},
  	{
  		"id": "131",
  		"name": "行天宮",
  		"line": "中和、蘆洲、新莊線",
  		"address": "104台灣台北市中山區捷運行天宮站",
  		"latitude": 25.059717,
  		"longitude": 121.533184,
      expend: false,
  	},
  	{
  		"id": "130",
  		"name": "中山國小",
  		"line": "中和、蘆洲、新莊線",
  		"address": "104台灣台北市中山區捷運中山國小站",
  		"latitude": 25.062693,
  		"longitude": 121.526418,
      expend: false,
  	},
  	{
  		"id": "055",
  		"name": "民權西路",
  		"line": "中和、蘆洲、新莊線",
  		"address": "103台灣台北市大同區捷運民權西路站",
  		"latitude": 25.062905,
  		"longitude": 121.519319,
      expend: false,
  	},
  	{
  		"id": "128",
  		"name": "大橋頭",
  		"line": "中和、蘆洲、新莊線",
  		"address": "103台灣台北市大同區捷運大橋頭站",
  		"latitude": 25.063199,
  		"longitude": 121.512801,
      expend: false,
  	},
  	{
  		"id": "178",
  		"name": "三重國小",
  		"line": "中和、蘆洲、新莊線",
  		"address": "241台灣新北市三重區捷運三重國小站",
  		"latitude": 25.070318,
  		"longitude": 121.496904,
      expend: false,
  	},
  	{
  		"id": "177",
  		"name": "三和國中",
  		"line": "中和、蘆洲、新莊線",
  		"address": "241台灣新北市三重區捷運三和國中站",
  		"latitude": 25.076858,
  		"longitude": 121.486346,
      expend: false,
  	},
  	{
  		"id": "176",
  		"name": "徐匯中學",
  		"line": "中和、蘆洲、新莊線",
  		"address": "247台灣新北市蘆洲區捷運徐匯中學站",
  		"latitude": 25.080727,
  		"longitude": 121.479673,
      expend: false,
  	},
  	{
  		"id": "175",
  		"name": "三民高中",
  		"line": "中和、蘆洲、新莊線",
  		"address": "247台灣新北市蘆洲區捷運三民高中站",
  		"latitude": 25.085456,
  		"longitude": 121.473389,
      expend: false,
  	},
  	{
  		"id": "174",
  		"name": "蘆洲",
  		"line": "中和、蘆洲、新莊線",
  		"address": "247台灣新北市蘆洲區捷運蘆洲站",
  		"latitude": 25.091553,
  		"longitude": 121.464471,
      expend: false,
  	},
  	{
  		"id": "127",
  		"name": "台北橋",
  		"line": "中和、蘆洲、新莊線",
  		"address": "241台灣新北市三重區捷運台北橋站",
  		"latitude": 25.063274,
  		"longitude": 121.500762,
      expend: false,
  	},
  	{
  		"id": "126",
  		"name": "菜寮",
  		"line": "中和、蘆洲、新莊線",
  		"address": "241台灣新北市三重區捷運菜寮站",
  		"latitude": 25.060274,
  		"longitude": 121.492156,
      expend: false,
  	},
  	{
  		"id": "125",
  		"name": "三重",
  		"line": "中和、蘆洲、新莊線",
  		"address": "241台灣新北市三重區捷運三重站",
  		"latitude": 25.055791,
  		"longitude": 121.484725,
      expend: false,
  	},
  	{
  		"id": "124",
  		"name": "先嗇宮",
  		"line": "中和、蘆洲、新莊線",
  		"address": "241台灣新北市三重區捷運先嗇宮站",
  		"latitude": 25.046493,
  		"longitude": 121.471916,
      expend: false,
  	},
  	{
  		"id": "123",
  		"name": "頭前庄",
  		"line": "中和、蘆洲、新莊線",
  		"address": "242台灣新北市新莊區捷運頭前庄站",
  		"latitude": 25.039705,
  		"longitude": 121.461746,
      expend: false,
  	},
  	{
  		"id": "122",
  		"name": "新莊",
  		"line": "中和、蘆洲、新莊線",
  		"address": "242台灣新北市新莊區捷運新莊站",
  		"latitude": 25.036125,
  		"longitude": 121.452468,
      expend: false,
  	},
  	{
  		"id": "121",
  		"name": "輔大",
  		"line": "中和、蘆洲、新莊線",
  		"address": "242台灣新北市新莊區捷運輔大站",
  		"latitude": 25.032718,
  		"longitude": 121.43547
,
expend: false,  	},
  	{
  		"id": "180",
  		"name": "丹鳳",
  		"line": "中和、蘆洲、新莊線",
  		"address": "242台灣新北市新莊區捷運丹鳳站",
  		"latitude": 25.028893,
  		"longitude": 121.422685,
      expend: false,
  	},
  	{
  		"id": "179",
  		"name": "迴龍",
  		"line": "中和、蘆洲、新莊線",
  		"address": "242台灣新北市新莊區捷運迴龍站",
  		"latitude": 25.022107,
  		"longitude": 121.411771,
      expend: false,
  	},
  	{
  		"id": "031",
  		"name": "南港展覽館",
  		"line": "南港、板橋、土城線",
  		"address": "115台灣台北市南港區捷運南港展覽館站",
  		"latitude": 25.055368,
  		"longitude": 121.6176
  ,
expend: false,	},
  	{
  		"id": "097",
  		"name": "南港",
  		"line": "南港、板橋、土城線",
  		"address": "115台灣台北市南港區捷運南港站",
  		"latitude": 25.052116,
  		"longitude": 121.606686,
      expend: false,
  	},
  	{
  		"id": "096",
  		"name": "昆陽",
  		"line": "南港、板橋、土城線",
  		"address": "115台灣台北市南港區捷運昆陽站",
  		"latitude": 25.050461,
  		"longitude": 121.593268,
      expend: false,
  	},
  	{
  		"id": "095",
  		"name": "後山埤",
  		"line": "南港、板橋、土城線",
  		"address": "115台灣台北市南港區捷運後山埤站",
  		"latitude": 25.045054,
  		"longitude": 121.582522,
      expend: false,
  	},
  	{
  		"id": "094",
  		"name": "永春",
  		"line": "南港、板橋、土城線",
  		"address": "110台灣台北市信義區捷運永春站",
  		"latitude": 25.040859,
  		"longitude": 121.576292,
      expend: false,
  	},
  	{
  		"id": "093",
  		"name": "市政府",
  		"line": "南港、板橋、土城線",
  		"address": "110台灣台北市信義區捷運市政府站",
  		"latitude": 25.041171,
  		"longitude": 121.565227,
      expend: false,
  	}
  ];

*/
// var MRT = []

// // map style - https://snazzymaps.com/style/61/blue-essence
// var mapStyle = [
//   {
//     "featureType": "landscape.natural",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "visibility": "on"
//         },
//         {
//             "color": "#e0efef"
//         }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "visibility": "on"
//         },
//         {
//             "hue": "#1900ff"
//         },
//         {
//             "color": "#c0e8e8"
//         }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//         {
//             "lightness": 100
//         },
//         {
//             "visibility": "simplified"
//         }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry",
//     "stylers": [
//         {
//             "visibility": "on"
//         },
//         {
//             "lightness": 700
//         }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "all",
//     "stylers": [
//         {
//             "color": "#7dcdcd"
//         }
//     ]
//   }
// ];

// $.fn.tinyMapConfigure({
//   // Google Maps API URL
// //   'api': '//maps.googleapis.com/maps/api/js',
//   // Google Maps API Version
// //   'v': '3.21',
//   // Google Maps API Key，預設 null
//   'key': 'AIzaSyAvmPNE1IW6XrXEeNXkLqj7fERGyFvEtaE',
//   // 使用的地圖語言
// //   'language': 'zh‐TW',
//   // 載入的函式庫名稱，預設 null
// //   'libraries': 'adsense,drawing,geometry...',
//   // 使用個人化的地圖，預設 false
// //   'signed_in': true|false,
//   // MarkerClustererPlus.js 路徑
//   // 預設 'https://cdn.essoduke.org/js/tinyMap/markerclusterer.js'
//   // 建議下載至自有主機，避免讀取延遲造成無法使用。
// //   'clusterer': 'path/to/markerclusterer.js',
//   // MarkerWithLabel.js 路徑
//   // 預設 'https://cdn.essoduke.org/js/tinyMap/markerwithlabel.js'
//   // 建議下載至自有主機，避免讀取延遲造成無法使用。
// //   'withLabel': '//cdn.essoduke.org/js/tinyMap/markerwithlabel.js'
// });