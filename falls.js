(function(w){
	var option = {
		cols:3,
		imgWidth:290,
		imgPadding:5,
		id:'container'
	};
	var imgWidthAll;  //每张图的总宽度
	var imgs;		  //图片节点数组
	var heightArray = [];    //存储高度
	var imgsLength;	  //图片数量
	var box;
	w.falls = {
		init:function(data){
			option = Object.assign({},option,data);
			imgWidthAll = option.imgWidth+option.imgPadding*2;
			box = document.getElementById(option.id);
			this.fallInit()
		},
		fallInit:function(){
			box.style.width = option.cols*imgWidthAll+'px';
			imgs = box.getElementsByTagName("img");
			for(var i = 0;i < option.cols;i++){
				heightArray.push(imgs[i].offsetHeight);
			}
			this.imgCal(option.cols);		
			var that = this;
			window.onscroll = function(){
				that.checkScroll();
			}
		},
		imgCal:function(num){
			imgs = box.getElementsByTagName("img");
			for(var i = num;i < imgs.length;i++){
				var heightMin = Math.min.apply(null,heightArray);
				var index = heightArray.indexOf(heightMin);
				imgs[i].style.position = "absolute";
				imgs[i].style.top = heightMin+"px";
				imgs[i].style.left = imgWidthAll*index+"px";
				heightArray[index] = heightArray[index] + imgs[i].offsetHeight;
				var heightMax = Math.max.apply(null,heightArray);
				box.style.height = heightMax+"px";
			}
		},
		checkScroll:function(){
			imgs = box.getElementsByTagName("img");
			var top = document.documentElement.scrollTop || document.body.scrollTop;
			var lastHeight = imgs[imgs.length-1].offsetTop;
			var windowHeight = document.documentElement.clientHeight;
			if(top+windowHeight > lastHeight){
				imgsLength = imgs.length;
				loadmore();
			}
		},
		addImg:function(array){
			for(var i = 0;i < array.length;i++){
				var child = document.createElement("img");
				child.src = array[i];
				box.appendChild(child);
				this.imgCal(imgsLength+i);
			}
		}
	}
})(window);
