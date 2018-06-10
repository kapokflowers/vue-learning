var app = new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'iphoneX',
                price:7899,
                count:1
            },
            {
                id:2,
                name:'ipad pro',
                price:5888,
                count:1
            },
            {
                id:3,
                name:'MacBook pro',
                price:21486,
                count:1
            }
        ]
    },
    computed:{
        totalPrice:function(){
            var total = 0;
            for(var i = 0; i < this.list.length; i++){
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
        handleReduce:function (index) {
            if (this.list[index].count === 1) return;//再判断一遍，如果不用button,用div,span等disabled是不起作用的 
            this.list[index].count--;
        },
        handleAdd:function (index) {
            this.list[index].count++;
        },
        /*splice主要用来对js中的数组进行操作，包括删除，添加，替换等*/
        handleRemove:function (index) {
            this.list.splice(index,1);//删除功能，第一个参数为第一项位置，第二个参数为要删除几个
        }
    }
});