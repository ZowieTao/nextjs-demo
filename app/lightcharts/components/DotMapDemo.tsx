import { ChartOption } from "@byted/lightcharts";
import ReactLightcharts from '@byted/react-lightcharts'
import * as lightcharts from '@byted/lightcharts'
import china from '@byted/lightcharts/map/china.geo.json'
import { GeoJSON } from "@byted/lightcharts/lib/interface/geoJSON";


const chinaGeoJSON = china as unknown as GeoJSON;

lightcharts.registerMap('china', chinaGeoJSON)

export const DotMapDemo = () => {
  const data = [
    {
      "name": "海门",
      "longtitude": 121.15,
      "latitude": 31.89,
      "count": 28
    },
    {
      "name": "鄂尔多斯",
      "longtitude": 109.781327,
      "latitude": 39.608266,
      "count": 78
    },
    {
      "name": "招远",
      "longtitude": 120.38,
      "latitude": 37.35,
      "count": 6
    },
    {
      "name": "舟山",
      "longtitude": 122.207216,
      "latitude": 29.985295,
      "count": 63
    },
    {
      "name": "齐齐哈尔",
      "longtitude": 123.97,
      "latitude": 47.33,
      "count": 88
    },
    {
      "name": "盐城",
      "longtitude": 120.13,
      "latitude": 33.38,
      "count": 93
    },
    {
      "name": "赤峰",
      "longtitude": 118.87,
      "latitude": 42.28,
      "count": 12
    },
    {
      "name": "青岛",
      "longtitude": 120.33,
      "latitude": 36.07,
      "count": 6
    },
    {
      "name": "乳山",
      "longtitude": 121.52,
      "latitude": 36.89,
      "count": 90
    },
    {
      "name": "金昌",
      "longtitude": 102.188043,
      "latitude": 38.520089,
      "count": 25
    },
    {
      "name": "泉州",
      "longtitude": 118.58,
      "latitude": 24.93,
      "count": 17
    },
    {
      "name": "莱西",
      "longtitude": 120.53,
      "latitude": 36.86,
      "count": 11
    },
    {
      "name": "日照",
      "longtitude": 119.46,
      "latitude": 35.42,
      "count": 64
    },
    {
      "name": "胶南",
      "longtitude": 119.97,
      "latitude": 35.88,
      "count": 19
    },
    {
      "name": "南通",
      "longtitude": 121.05,
      "latitude": 32.08,
      "count": 36
    },
    {
      "name": "拉萨",
      "longtitude": 91.11,
      "latitude": 29.97,
      "count": 61
    },
    {
      "name": "云浮",
      "longtitude": 112.02,
      "latitude": 22.93,
      "count": 42
    },
    {
      "name": "梅州",
      "longtitude": 116.1,
      "latitude": 24.55,
      "count": 52
    },
    {
      "name": "文登",
      "longtitude": 122.05,
      "latitude": 37.2,
      "count": 92
    },
    {
      "name": "上海",
      "longtitude": 121.48,
      "latitude": 31.22,
      "count": 85
    },
    {
      "name": "攀枝花",
      "longtitude": 101.718637,
      "latitude": 26.582347,
      "count": 92
    },
    {
      "name": "威海",
      "longtitude": 122.1,
      "latitude": 37.5,
      "count": 21
    },
    {
      "name": "承德",
      "longtitude": 117.93,
      "latitude": 40.97,
      "count": 100
    },
    {
      "name": "厦门",
      "longtitude": 118.1,
      "latitude": 24.46,
      "count": 17
    },
    {
      "name": "汕尾",
      "longtitude": 115.375279,
      "latitude": 22.786211,
      "count": 83
    },
    {
      "name": "潮州",
      "longtitude": 116.63,
      "latitude": 23.68,
      "count": 81
    },
    {
      "name": "丹东",
      "longtitude": 124.37,
      "latitude": 40.13,
      "count": 96
    },
    {
      "name": "太仓",
      "longtitude": 121.1,
      "latitude": 31.45,
      "count": 75
    },
    {
      "name": "曲靖",
      "longtitude": 103.79,
      "latitude": 25.51,
      "count": 97
    },
    {
      "name": "烟台",
      "longtitude": 121.39,
      "latitude": 37.52,
      "count": 13
    },
    {
      "name": "福州",
      "longtitude": 119.3,
      "latitude": 26.08,
      "count": 25
    },
    {
      "name": "瓦房店",
      "longtitude": 121.979603,
      "latitude": 39.627114,
      "count": 78
    },
    {
      "name": "即墨",
      "longtitude": 120.45,
      "latitude": 36.38,
      "count": 33
    },
    {
      "name": "抚顺",
      "longtitude": 123.97,
      "latitude": 41.97,
      "count": 24
    },
    {
      "name": "玉溪",
      "longtitude": 102.52,
      "latitude": 24.35,
      "count": 1
    },
    {
      "name": "张家口",
      "longtitude": 114.87,
      "latitude": 40.82,
      "count": 53
    },
    {
      "name": "阳泉",
      "longtitude": 113.57,
      "latitude": 37.85,
      "count": 43
    },
    {
      "name": "莱州",
      "longtitude": 119.942327,
      "latitude": 37.177017,
      "count": 79
    },
    {
      "name": "湖州",
      "longtitude": 120.1,
      "latitude": 30.86,
      "count": 41
    },
    {
      "name": "汕头",
      "longtitude": 116.69,
      "latitude": 23.39,
      "count": 12
    },
    {
      "name": "昆山",
      "longtitude": 120.95,
      "latitude": 31.39,
      "count": 78
    },
    {
      "name": "宁波",
      "longtitude": 121.56,
      "latitude": 29.86,
      "count": 86
    },
    {
      "name": "湛江",
      "longtitude": 110.359377,
      "latitude": 21.270708,
      "count": 97
    },
    {
      "name": "揭阳",
      "longtitude": 116.35,
      "latitude": 23.55,
      "count": 73
    },
    {
      "name": "荣成",
      "longtitude": 122.41,
      "latitude": 37.16,
      "count": 41
    },
    {
      "name": "连云港",
      "longtitude": 119.16,
      "latitude": 34.59,
      "count": 66
    },
    {
      "name": "葫芦岛",
      "longtitude": 120.836932,
      "latitude": 40.711052,
      "count": 58
    },
    {
      "name": "常熟",
      "longtitude": 120.74,
      "latitude": 31.64,
      "count": 74
    },
    {
      "name": "东莞",
      "longtitude": 113.75,
      "latitude": 23.04,
      "count": 96
    },
    {
      "name": "河源",
      "longtitude": 114.68,
      "latitude": 23.73,
      "count": 69
    },
    {
      "name": "淮安",
      "longtitude": 119.15,
      "latitude": 33.5,
      "count": 79
    },
    {
      "name": "泰州",
      "longtitude": 119.9,
      "latitude": 32.49,
      "count": 80
    },
    {
      "name": "南宁",
      "longtitude": 108.33,
      "latitude": 22.84,
      "count": 7
    },
    {
      "name": "营口",
      "longtitude": 122.18,
      "latitude": 40.65,
      "count": 30
    },
    {
      "name": "惠州",
      "longtitude": 114.4,
      "latitude": 23.09,
      "count": 1
    },
    {
      "name": "江阴",
      "longtitude": 120.26,
      "latitude": 31.91,
      "count": 96
    },
    {
      "name": "蓬莱",
      "longtitude": 120.75,
      "latitude": 37.8,
      "count": 10
    },
    {
      "name": "韶关",
      "longtitude": 113.62,
      "latitude": 24.84,
      "count": 21
    },
    {
      "name": "嘉峪关",
      "longtitude": 98.289152,
      "latitude": 39.77313,
      "count": 100
    },
    {
      "name": "广州",
      "longtitude": 113.23,
      "latitude": 23.16,
      "count": 4
    },
    {
      "name": "延安",
      "longtitude": 109.47,
      "latitude": 36.6,
      "count": 33
    },
    {
      "name": "太原",
      "longtitude": 112.53,
      "latitude": 37.87,
      "count": 91
    },
    {
      "name": "清远",
      "longtitude": 113.01,
      "latitude": 23.7,
      "count": 44
    },
    {
      "name": "中山",
      "longtitude": 113.38,
      "latitude": 22.52,
      "count": 73
    },
    {
      "name": "昆明",
      "longtitude": 102.73,
      "latitude": 25.04,
      "count": 23
    },
    {
      "name": "寿光",
      "longtitude": 118.73,
      "latitude": 36.86,
      "count": 52
    },
    {
      "name": "盘锦",
      "longtitude": 122.070714,
      "latitude": 41.119997,
      "count": 65
    },
    {
      "name": "长治",
      "longtitude": 113.08,
      "latitude": 36.18,
      "count": 33
    },
    {
      "name": "深圳",
      "longtitude": 114.07,
      "latitude": 22.62,
      "count": 39
    },
    {
      "name": "珠海",
      "longtitude": 113.52,
      "latitude": 22.3,
      "count": 40
    },
    {
      "name": "宿迁",
      "longtitude": 118.3,
      "latitude": 33.96,
      "count": 12
    },
    {
      "name": "咸阳",
      "longtitude": 108.72,
      "latitude": 34.36,
      "count": 8
    },
    {
      "name": "铜川",
      "longtitude": 109.11,
      "latitude": 35.09,
      "count": 7
    },
    {
      "name": "平度",
      "longtitude": 119.97,
      "latitude": 36.77,
      "count": 78
    },
    {
      "name": "佛山",
      "longtitude": 113.11,
      "latitude": 23.05,
      "count": 45
    },
    {
      "name": "海口",
      "longtitude": 110.35,
      "latitude": 20.02,
      "count": 45
    },
    {
      "name": "江门",
      "longtitude": 113.06,
      "latitude": 22.61,
      "count": 87
    },
    {
      "name": "章丘",
      "longtitude": 117.53,
      "latitude": 36.72,
      "count": 55
    },
    {
      "name": "肇庆",
      "longtitude": 112.44,
      "latitude": 23.05,
      "count": 46
    },
    {
      "name": "大连",
      "longtitude": 121.62,
      "latitude": 38.92,
      "count": 41
    },
    {
      "name": "临汾",
      "longtitude": 111.5,
      "latitude": 36.08,
      "count": 88
    },
    {
      "name": "吴江",
      "longtitude": 120.63,
      "latitude": 31.16,
      "count": 49
    },
    {
      "name": "石嘴山",
      "longtitude": 106.39,
      "latitude": 39.04,
      "count": 17
    },
    {
      "name": "沈阳",
      "longtitude": 123.38,
      "latitude": 41.8,
      "count": 70
    },
    {
      "name": "苏州",
      "longtitude": 120.62,
      "latitude": 31.32,
      "count": 77
    },
    {
      "name": "茂名",
      "longtitude": 110.88,
      "latitude": 21.68,
      "count": 5
    },
    {
      "name": "嘉兴",
      "longtitude": 120.76,
      "latitude": 30.77,
      "count": 69
    },
    {
      "name": "长春",
      "longtitude": 125.35,
      "latitude": 43.88,
      "count": 81
    },
    {
      "name": "胶州",
      "longtitude": 120.03336,
      "latitude": 36.264622,
      "count": 85
    },
    {
      "name": "银川",
      "longtitude": 106.27,
      "latitude": 38.47,
      "count": 23
    },
    {
      "name": "张家港",
      "longtitude": 120.555821,
      "latitude": 31.875428,
      "count": 31
    },
    {
      "name": "三门峡",
      "longtitude": 111.19,
      "latitude": 34.76,
      "count": 92
    },
    {
      "name": "锦州",
      "longtitude": 121.15,
      "latitude": 41.13,
      "count": 10
    },
    {
      "name": "南昌",
      "longtitude": 115.89,
      "latitude": 28.68,
      "count": 5
    },
    {
      "name": "柳州",
      "longtitude": 109.4,
      "latitude": 24.33,
      "count": 43
    },
    {
      "name": "三亚",
      "longtitude": 109.511909,
      "latitude": 18.252847,
      "count": 3
    },
    {
      "name": "自贡",
      "longtitude": 104.778442,
      "latitude": 29.33903,
      "count": 62
    },
    {
      "name": "吉林",
      "longtitude": 126.57,
      "latitude": 43.87,
      "count": 70
    },
    {
      "name": "阳江",
      "longtitude": 111.95,
      "latitude": 21.85,
      "count": 60
    },
    {
      "name": "泸州",
      "longtitude": 105.39,
      "latitude": 28.91,
      "count": 40
    },
    {
      "name": "西宁",
      "longtitude": 101.74,
      "latitude": 36.56,
      "count": 28
    },
    {
      "name": "宜宾",
      "longtitude": 104.56,
      "latitude": 29.77,
      "count": 22
    },
    {
      "name": "呼和浩特",
      "longtitude": 111.65,
      "latitude": 40.82,
      "count": 59
    },
    {
      "name": "成都",
      "longtitude": 104.06,
      "latitude": 30.67,
      "count": 1
    },
    {
      "name": "大同",
      "longtitude": 113.3,
      "latitude": 40.12,
      "count": 65
    },
    {
      "name": "镇江",
      "longtitude": 119.44,
      "latitude": 32.2,
      "count": 42
    },
    {
      "name": "桂林",
      "longtitude": 110.28,
      "latitude": 25.29,
      "count": 94
    },
    {
      "name": "张家界",
      "longtitude": 110.479191,
      "latitude": 29.117096,
      "count": 66
    },
    {
      "name": "宜兴",
      "longtitude": 119.82,
      "latitude": 31.36,
      "count": 70
    },
    {
      "name": "北海",
      "longtitude": 109.12,
      "latitude": 21.49,
      "count": 28
    },
    {
      "name": "西安",
      "longtitude": 108.95,
      "latitude": 34.27,
      "count": 60
    },
    {
      "name": "金坛",
      "longtitude": 119.56,
      "latitude": 31.74,
      "count": 48
    },
    {
      "name": "东营",
      "longtitude": 118.49,
      "latitude": 37.46,
      "count": 98
    },
    {
      "name": "牡丹江",
      "longtitude": 129.58,
      "latitude": 44.6,
      "count": 65
    },
    {
      "name": "遵义",
      "longtitude": 106.9,
      "latitude": 27.7,
      "count": 70
    },
    {
      "name": "绍兴",
      "longtitude": 120.58,
      "latitude": 30.01,
      "count": 63
    },
    {
      "name": "扬州",
      "longtitude": 119.42,
      "latitude": 32.39,
      "count": 85
    },
    {
      "name": "常州",
      "longtitude": 119.95,
      "latitude": 31.79,
      "count": 96
    },
    {
      "name": "潍坊",
      "longtitude": 119.1,
      "latitude": 36.62,
      "count": 93
    },
    {
      "name": "重庆",
      "longtitude": 106.54,
      "latitude": 29.59,
      "count": 78
    },
    {
      "name": "台州",
      "longtitude": 121.420757,
      "latitude": 28.656386,
      "count": 46
    },
    {
      "name": "南京",
      "longtitude": 118.78,
      "latitude": 32.04,
      "count": 38
    },
    {
      "name": "滨州",
      "longtitude": 118.03,
      "latitude": 37.36,
      "count": 37
    },
    {
      "name": "贵阳",
      "longtitude": 106.71,
      "latitude": 26.57,
      "count": 88
    },
    {
      "name": "无锡",
      "longtitude": 120.29,
      "latitude": 31.59,
      "count": 19
    },
    {
      "name": "本溪",
      "longtitude": 123.73,
      "latitude": 41.3,
      "count": 20
    },
    {
      "name": "克拉玛依",
      "longtitude": 84.77,
      "latitude": 45.59,
      "count": 51
    },
    {
      "name": "渭南",
      "longtitude": 109.5,
      "latitude": 34.52,
      "count": 54
    },
    {
      "name": "马鞍山",
      "longtitude": 118.48,
      "latitude": 31.56,
      "count": 73
    },
    {
      "name": "宝鸡",
      "longtitude": 107.15,
      "latitude": 34.38,
      "count": 74
    },
    {
      "name": "焦作",
      "longtitude": 113.21,
      "latitude": 35.24,
      "count": 63
    },
    {
      "name": "句容",
      "longtitude": 119.16,
      "latitude": 31.95,
      "count": 41
    },
    {
      "name": "北京",
      "longtitude": 116.46,
      "latitude": 39.92,
      "count": 69
    },
    {
      "name": "徐州",
      "longtitude": 117.2,
      "latitude": 34.26,
      "count": 59
    },
    {
      "name": "衡水",
      "longtitude": 115.72,
      "latitude": 37.72,
      "count": 27
    },
    {
      "name": "包头",
      "longtitude": 110,
      "latitude": 40.58,
      "count": 95
    },
    {
      "name": "绵阳",
      "longtitude": 104.73,
      "latitude": 31.48,
      "count": 90
    },
    {
      "name": "乌鲁木齐",
      "longtitude": 87.68,
      "latitude": 43.77,
      "count": 50
    },
    {
      "name": "枣庄",
      "longtitude": 117.57,
      "latitude": 34.86,
      "count": 97
    },
    {
      "name": "杭州",
      "longtitude": 120.19,
      "latitude": 30.26,
      "count": 86
    },
    {
      "name": "淄博",
      "longtitude": 118.05,
      "latitude": 36.78,
      "count": 8
    },
    {
      "name": "鞍山",
      "longtitude": 122.85,
      "latitude": 41.12,
      "count": 56
    },
    {
      "name": "溧阳",
      "longtitude": 119.48,
      "latitude": 31.43,
      "count": 80
    },
    {
      "name": "库尔勒",
      "longtitude": 86.06,
      "latitude": 41.68,
      "count": 75
    },
    {
      "name": "安阳",
      "longtitude": 114.35,
      "latitude": 36.1,
      "count": 50
    },
    {
      "name": "开封",
      "longtitude": 114.35,
      "latitude": 34.79,
      "count": 54
    },
    {
      "name": "济南",
      "longtitude": 117,
      "latitude": 36.65,
      "count": 9
    },
    {
      "name": "德阳",
      "longtitude": 104.37,
      "latitude": 31.13,
      "count": 29
    },
    {
      "name": "温州",
      "longtitude": 120.65,
      "latitude": 28.01,
      "count": 63
    },
    {
      "name": "九江",
      "longtitude": 115.97,
      "latitude": 29.71,
      "count": 81
    },
    {
      "name": "邯郸",
      "longtitude": 114.47,
      "latitude": 36.6,
      "count": 61
    },
    {
      "name": "临安",
      "longtitude": 119.72,
      "latitude": 30.23,
      "count": 83
    },
    {
      "name": "兰州",
      "longtitude": 103.73,
      "latitude": 36.03,
      "count": 70
    },
    {
      "name": "沧州",
      "longtitude": 116.83,
      "latitude": 38.33,
      "count": 88
    },
    {
      "name": "临沂",
      "longtitude": 118.35,
      "latitude": 35.05,
      "count": 53
    },
    {
      "name": "南充",
      "longtitude": 106.110698,
      "latitude": 30.837793,
      "count": 52
    },
    {
      "name": "天津",
      "longtitude": 117.2,
      "latitude": 39.13,
      "count": 54
    },
    {
      "name": "富阳",
      "longtitude": 119.95,
      "latitude": 30.07,
      "count": 62
    },
    {
      "name": "泰安",
      "longtitude": 117.13,
      "latitude": 36.18,
      "count": 12
    },
    {
      "name": "诸暨",
      "longtitude": 120.23,
      "latitude": 29.71,
      "count": 11
    },
    {
      "name": "郑州",
      "longtitude": 113.65,
      "latitude": 34.76,
      "count": 87
    },
    {
      "name": "哈尔滨",
      "longtitude": 126.63,
      "latitude": 45.75,
      "count": 74
    },
    {
      "name": "聊城",
      "longtitude": 115.97,
      "latitude": 36.45,
      "count": 54
    },
    {
      "name": "芜湖",
      "longtitude": 118.38,
      "latitude": 31.33,
      "count": 45
    },
    {
      "name": "唐山",
      "longtitude": 118.02,
      "latitude": 39.63,
      "count": 41
    },
    {
      "name": "平顶山",
      "longtitude": 113.29,
      "latitude": 33.75,
      "count": 36
    },
    {
      "name": "邢台",
      "longtitude": 114.48,
      "latitude": 37.05,
      "count": 12
    },
    {
      "name": "德州",
      "longtitude": 116.29,
      "latitude": 37.45,
      "count": 19
    },
    {
      "name": "济宁",
      "longtitude": 116.59,
      "latitude": 35.38,
      "count": 65
    },
    {
      "name": "荆州",
      "longtitude": 112.239741,
      "latitude": 30.335165,
      "count": 70
    },
    {
      "name": "宜昌",
      "longtitude": 111.3,
      "latitude": 30.7,
      "count": 96
    },
    {
      "name": "义乌",
      "longtitude": 120.06,
      "latitude": 29.32,
      "count": 51
    },
    {
      "name": "丽水",
      "longtitude": 119.92,
      "latitude": 28.45,
      "count": 56
    },
    {
      "name": "洛阳",
      "longtitude": 112.44,
      "latitude": 34.7,
      "count": 91
    },
    {
      "name": "秦皇岛",
      "longtitude": 119.57,
      "latitude": 39.95,
      "count": 79
    },
    {
      "name": "株洲",
      "longtitude": 113.16,
      "latitude": 27.83,
      "count": 52
    },
    {
      "name": "石家庄",
      "longtitude": 114.48,
      "latitude": 38.03,
      "count": 63
    },
    {
      "name": "莱芜",
      "longtitude": 117.67,
      "latitude": 36.19,
      "count": 60
    },
    {
      "name": "常德",
      "longtitude": 111.69,
      "latitude": 29.05,
      "count": 95
    },
    {
      "name": "保定",
      "longtitude": 115.48,
      "latitude": 38.85,
      "count": 65
    },
    {
      "name": "湘潭",
      "longtitude": 112.91,
      "latitude": 27.87,
      "count": 53
    },
    {
      "name": "金华",
      "longtitude": 119.64,
      "latitude": 29.12,
      "count": 75
    },
    {
      "name": "岳阳",
      "longtitude": 113.09,
      "latitude": 29.37,
      "count": 52
    },
    {
      "name": "长沙",
      "longtitude": 113,
      "latitude": 28.21,
      "count": 87
    },
    {
      "name": "衢州",
      "longtitude": 118.88,
      "latitude": 28.97,
      "count": 84
    },
    {
      "name": "廊坊",
      "longtitude": 116.7,
      "latitude": 39.53,
      "count": 3
    },
    {
      "name": "菏泽",
      "longtitude": 115.480656,
      "latitude": 35.23375,
      "count": 74
    },
    {
      "name": "合肥",
      "longtitude": 117.27,
      "latitude": 31.86,
      "count": 38
    },
    {
      "name": "武汉",
      "longtitude": 114.31,
      "latitude": 30.52,
      "count": 27
    },
    {
      "name": "大庆",
      "longtitude": 125.03,
      "latitude": 46.58,
      "count": 45
    }
  ]

  const option: ChartOption = {
    data,

    geo: {
      map: 'china',
      zooming: true,
      panning: true,
    },

    legend: {
      show: false,
    },

    colorLegend: {
      show: true,
      position: "left",
      align: 'end',
      orient: 'vertical',
      handleIcon: 'triangle'
    },
    series: [
      {
        type: 'scatter',
        coord: 'geo',
        name: '地理散点图',
        encode: {
          name: 'name',
          lng: "longtitude",
          lat: "latitude",
          size: ['count', [0, 10]],
          color: ['count', '#fff-#33f'],
        },
        shapeStyle: {
          fillOpacity: 1,
        }
      }
    ]
  };


  return (
    <div onClick={() => {
    }}>
      <ReactLightcharts option={option} />
    </div>
  )
}