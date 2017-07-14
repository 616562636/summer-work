$(function () {
    var vm = new Vue({
        el:'#module_upload',
        data:{
            title:"",
            category:1,
            type:1,
            tag:[],
            pricerange:[],
            price:[],
            style:[],
            inventory:[],
        },
        methods: {
            addWare: function () {
                // $.ajax({
                //     url:"",
                //     type:"post",
                //     data:{
                //         title:this.title
                //     }
                // })
                console.log(this.category);
            }
        }
    })
});