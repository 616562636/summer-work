$(function () {
    var statusVue = new Vue({
        el:'#module_pay',
        data:{
            status:1
        },
        methods: {
            statusChange : function (curStatus) {
                this.status = curStatus;
            },
            pay :function () {
                console.log(this.status);
            }
        }
    });
});