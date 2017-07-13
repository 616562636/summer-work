$(function () {
    var pageVue = new Vue({
        el:'#module_ware',
        data:{
            status:1,
            mu:[{"text":"12",index:1},{"text":"23",index:2},{"text":"34",index:3},{"text":"23",index:4},{"text":"34",index:5},{"text":"23",index:6},{"text":"34",index:7}]
        },
        methods:{
            statusSwitch: function (curStatus) {
                console.log(curStatus);
                this.status=curStatus;
                var targetLeft = 0.1 + (this.status-1)*2.5;
                $(".hr_status").animate({"left":targetLeft+"rem"});
            }
        }
    })
});