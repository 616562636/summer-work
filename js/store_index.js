$(function () {
    var pageVue = new Vue({
        el:'#module_index',
        data:{
            adUrl:[{"url":"http://www.baidu.com","pic": "http://qiniu.yoogus.com/add/%E5%A5%B3%E7%94%9F%E8%8A%825%E7%A8%BF.png"},
                {"url":"http://www.soso.com","pic": "http://qiniu.yoogus.com/add/%E5%A5%B3%E7%94%9F%E8%8A%82%E7%94%B7%E7%94%9F%E7%89%883.png"}],
            json:[{"index":2},{"index":3}]
        },
        methods:{
            activitySwitch: function () {
                var mySwiper =new Swiper('.swiper-container',{
                    loop:true,
                    autoplay:5000,
                    prevButton:'.button_prev',
                    nextButton:'.button_next'
                })
            },
            labelColor: function () {
                $(".collection_label").each(function (index,element) {
                    $(element).find(".item_label").eq(0).css("background","#84ccc9");
                    $(element).find(".item_label").eq(1).css("background","#7ecef4");
                    $(element).find(".item_label").eq(2).css("background","#f19ec2");
                })
            },
            addImg: function () {
                $(".img_ad").attr("src",function () {
                    return $(this).attr("data-src");
                })
            },
            skip2activity: function (href) {
                window.location.href = href;
            }
        },
        mounted: function () {
            this.activitySwitch();
            this.labelColor();
            this.addImg();
        }
    });
});