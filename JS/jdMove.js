//谁运动、哪个属性、目标值(最好传入纯数字)、链式运动的方法、怎么触发、
function Move(obj,attr,target,cFn){ //obj是让什么物体运动
  clearInterval(obj.kTimer);
  obj.kTimer = setInterval(function(){
  	// opacity: 0-1;
  	// filter:alpha(opacity=0-100); //改透明度
  	//width height left right bottom top line-height 都可以改
  	//var currentValue = obj.style[attr]; //style只能获取你已经写了的属性
    var currentValue = getStyle(obj,attr) || 0;  //如果currentValue不是数字，就给它0
    var speed = (target-currentValue)/8 ;
    speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

  	if(attr=="opacity" || attr=="filter"){   //如果属性值是透明度
      //console.log(getStyle(obj,attr)); //获得透明度
       if(target <= 1 && target >0){
       	target *= 100;
       }
       speed = (target-currentValue)/8 ;
       obj.style[attr] = (currentValue +speed)/100;
       obj.style[attr] = "alpha(opacity="+(currentValue + speed)+")";
       if(currentValue == target){
       	clearInterval(obj.kTimer);
       	if(cFn){
          	cFn();
          }
       }


  	}else{   //属性值不是透明度
       //console.log(getStyle(obj,attr));
      if(speed<0){
       	if(currentValue<=target){
          clearInterval(obj.kTimer);
          if(cFn){
          	cFn();
          }
        }else{
          obj.style[attr] = currentValue + speed +'px';  //Math.ceil(speed)
        }
      }else{
      	if(currentValue> target){
      		clearInterval(obj.kTimer);
      		if(cFn){
          	cFn();
          }
      	}else{
      	 obj.style[attr] = currentValue + speed +'px'; //Math.floor(speed)
      	}
      }
  	}
  },30);
}
function getStyle(obj,attr){ //在这里写获取什么对象的什么属性
  //window.getComputedStyle(obj,null); //获取哪个对象,哪个伪类
  //IE :obj.currentStyle(attr);
  var a="";
  if(obj.currentStyle){
   a = obj.currentStyle(attr);     //IE:currentStyle,火狐：getComputedStyle
  }else{
   a = window.getComputedStyle(obj,null)[attr];  //调用当前style对象的值
  }

  if(attr =="opacity" ||attr =="filter"){
    a = a*100;  //为了透明度取到 0-100的数
  }
  
  //// return a;  //返回透明度
  return parseInt(a); //返回其他的值
}