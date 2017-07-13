$(function () {
    var activityVue = new Vue({
        el:'#module_activity',
        data:{},
        methods:{
            switch: function () {
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
        }
    });
    activityVue.switch();

    var wareVue = new Vue({
        el:'.module_ware',
        data:{
            json:[{"title":"12","label":["1","sad","3"],"index":1},
                {"title":"23","label":["2","3","4"],"index":2},
                {"title":"34","label":["3","4","9"],"index":3}]
        },
        methods:{
            labelColor: function () {
                activityVue.labelColor();
            }
        }
    });
    wareVue.labelColor();
});