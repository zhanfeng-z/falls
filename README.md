# falls
falls.init(option)  //初始化插件

loadmore //滚轮到底调用的function 

option传入相应参数，可传空值

举个例子:option = {
    
            cols:3,  //图片列数，默认为3列

            imgWidth:290,   //img宽度，默认为290px

            imgPadding:5,   //img padding值为5px

            id:'container'  //内容div的id
            
        }

loadmore可调用falls.addImg往瀑布流中加入图片，参数是图片地址的数组
