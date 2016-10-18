/**
 * Created by zhangxuan on 2016/8/17.
 */
window.onload=function(){
  var images=document.getElementsByTagName('img');
  var lunbotu =document.getElementById('lunbotu'); //div
// alert(lunbotu.clientWidth);
  var lunbotufather = document.getElementById("lunbotufather"); //ul
  
  for(var i=0;i<images.length;i++){
  	var current = images[i];
  	//当前图片的宽度等于(div的宽度-左边栏的宽度)/2
  	current.style.width= Math.floor((lunbotu.offsetWidth-80)/2)+"px";
  	current.style.height = lunbotu.offsetHeight + "px";
  }
  lunbotufather.style.width = current.offsetWidth*7 +"px";
  lunbotufather.style.left = Math.ceil(-1*current.offsetWidth/2)+"px";
  
  var index = 1;  //为索引。索引从1开始，下标从0开始
  var currentImgWidth = images[index].offsetWidth; 
  var time=setInterval(function(){	
  	var curIndex = index%5;  //当前图片的下标
  	Move(lunbotufather,"left",-1*curIndex*currentImgWidth - Math.ceil(currentImgWidth/2),function(){
  	 if(index==4){
  	 	index=1;  //索引变为1
  	 	lunbotufather.style.left=currentImgWidth/2+"px";
  	 }
  	});
  	index++;  
  },4000);
}
