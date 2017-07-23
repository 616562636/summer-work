$(function () {
    var pageVue = new Vue({
        el:'#app_ware',
        data:{
            status:1,
            title:"12",
            styleShow: false,
            buyStatus:0,
            mu:[{"text":"12",index:1},{"text":"23",index:2},{"text":"34",index:3},{"text":"23",index:4},{"text":"34",index:5},{"text":"23",index:6},{"text":"34",index:7}],
            sigmaa:[{"name":"a","p":"231"},{"name":"b","p":"32"}],
            styleStatus:0,
            num:0,
            style:[
                {
                    "style_id": 10,     //样式id，每个样式在不同数量时价格不同，都会有一个独有的skuid
                    "style": "黄色",
                    "count": 9,
                    "price": [
                        {
                            "range": "0-100",
                            "price": 21,
                            "skuid": 1
                        },
                        {
                            "range": "101-200",
                            "price": 16,
                            "skuid": 2
                        },
                        {
                            "range": "201-9999",
                            "price": 10,
                            "skuid": 3
                        }
                    ]
                },
                {
                    "style_id": 13,     //样式id，每个样式在不同数量时价格不同，都会有一个独有的skuid
                    "style": "红色",
                    "count": 100,
                    "price": [
                        {
                            "range": "0-100",
                            "price": 20,
                            "skuid": 4
                        },
                        {
                            "range": "101-200",
                            "price": 15,
                            "skuid": 5
                        },
                        {
                            "range": "201-9999",
                            "price": 10,
                            "skuid": 6
                        }
                    ]
                }
            ]
        },
        methods:{
            statusSwitch: function (curStatus) {
                console.log(curStatus);
                this.status=curStatus;
                var targetLeft = 0.1 + (this.status-1)*2.5;
                $(".hr_status").animate({"left":targetLeft+"rem"});
            },
            statusBuy: function (status) {
                this.styleShow = !this.styleShow;
                console.log(this.styleShow);
                this.buyStatus=status;
            },
            confirmBuy: function () {
                if(this.buyStatus == 0){
                    this.styleShow = false;
                }else {
                    this.styleShow = false;
                }
            },
            statusStyle: function (status) {
                this.styleStatus = status;
                console.log(this.styleStatus);
            },
            numReduce: function () {
                if(this.num>0){
                    this.num=this.num-1;
                }
            },
            numIncrease: function () {
                this.num=this.num+1;
            }
        }
    });
});