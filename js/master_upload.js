$(function () {
    var vm = new Vue({
        el:'#module_upload',
        data:{
            title:"",
            category:1,
            type:1,
            tag:[],
            style:[],
            inventory:0,
            numArray:[],
            priceArray:[],
            styleName:"",
            collectionNumAndPrice:[],
            num:0,
            price:0
        },
        watch: {
            price: function (newPrice) {
                if(newPrice<0){
                    this.price=0;
                }
            },
            inventory: function (newInventory) {
                if(newInventory<0){
                    this.inventory=0;
                }
            }
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
            },
            addPrice: function () {
                if(this.num!="" && this.price!=""){
                    var itemNumAndPrice=[];
                    var myNum=0;
                    var myPrice=0;
                    myNum=this.num;
                    myPrice=this.price;
                    this.numArray.push(myNum);
                    this.priceArray.push(myPrice);
                    itemNumAndPrice.push(this.num);
                    itemNumAndPrice.push(this.price);
                    this.collectionNumAndPrice.push(itemNumAndPrice);
                    // console.log(this.numArray);
                    // console.log(this.numArray);
                }else {
                    alert("ee");
                }
            },
            deletePrice: function (deleteIndex) {
                this.collectionNumAndPrice.splice(deleteIndex,1);
                this.numArray.splice(deleteIndex,1);
                this.priceArray.splice(deleteIndex,1);
            },
            addCard: function () {
                var myStyleName = "";
                var myNumArray = [];
                var myPriceArray = [];
                var itemNumAndPrice = [];
                var myInventory = 0;
                var cardMsg = [];
                myStyleName = this.styleName;
                myInventory = this.inventory;
                for(var i=0;i<this.numArray.length;i++){
                    myNumArray[i] = this.numArray[i];
                }
                for(var j=0;j<this.priceArray.length;j++){
                    myPriceArray[j] = this.priceArray[j];
                }
                cardMsg.push(myStyleName);
                cardMsg.push(myInventory);
                cardMsg.push(myNumArray);
                cardMsg.push(myPriceArray);
                this.style.push(cardMsg);
                this.numArray.splice(0,this.numArray.length);
                this.priceArray.splice(0,this.priceArray.length);
                this.collectionNumAndPrice.splice(0,this.collectionNumAndPrice.length);
                console.log(this.style);
            },
            deleteCard: function (deleteIndex) {
                this.style.splice(deleteIndex,1);
                console.log(this.style);
            }
        }
    })
});