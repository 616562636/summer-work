$(function () {
    var pageVue = new Vue({
        el:'#module_index',
        data:{
            json:[{"index":1,"title":23,label:["1","2","3"]},
                {"index":2,label:["1","2","3"]},
                {"index":3}]
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
            }
        },
        mounted: function () {
            this.activitySwitch();
            this.labelColor();
        }
    });
});