window.onload = function(){
//获取...........................................................
  // header...........................................................
  		var hImg1 = document.getElementById('img1');
	   	var hImg2 = document.getElementById('img2');
	   	var hImg3 = document.getElementsByClassName('header_first')[0];
	   	var timer1 = null;
  //无缝滚动............................................................
  		var lroll = document.getElementsByClassName('roll')[0];
		var loUl = document.getElementsByClassName('ul1')[0];
		var lxx = lroll.getElementsByClassName('xx')[0];
		var laLi = loUl.getElementsByClassName('li1');
		var progress = document.getElementsByClassName('progress')[0];
		var progress_son = document.getElementsByClassName('progress_son')[0];
		var iSpeed = -2;
		var delay = 100;
		var id = null;
  //main.......................................................................
  		var service = document.getElementsByClassName('service')[0];
	 	var service_xx = document.getElementsByClassName('service_xx')[0];
	 	var service_img = service.getElementsByClassName('service_img')[0];
	 	var service_cover = service_img.getElementsByTagName('div');
  //footer................................................................
		var footer = document.getElementsByClassName('footer')[0];
		var middle = footer.getElementsByClassName('footer_middle')[0];
		var firstDiv = footer.getElementsByClassName('first')[0];
		var slide1 = footer.getElementsByClassName('Triangle')[0];
		var slide2 = footer.getElementsByClassName('Triangle_rectangle')[0];
		var oUl = footer.getElementsByClassName('ul1')[0];
		var aLi = oUl.getElementsByTagName('li');
		var aindex = 0;	
//运动。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
    //获取样式
		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj, false)[attr];
			}
	     }
    //函数............................................................
	 	function startMove(obj, json, fn){
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			var bStop=true;		
				for(var attr in json){			
					var iCur=0;			
					if(attr=='opacity'){
						iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
					}
					else{
						iCur=parseInt(getStyle(obj, attr));
					}			
					var iSpeed=(json[attr]-iCur)/8;
					iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
					if(iCur!=json[attr]){
						bStop=false;
					}			
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
						obj.style.opacity=(iCur+iSpeed)/100;
					}
					else{
						obj.style[attr]=iCur+iSpeed+'px';
					}
				}		
				if(bStop){
					clearInterval(obj.timer);			
					if(fn){
						fn();
					}
				}
		    }, 30)
	    }
//header.............................................................
  	//头部图片  		
		function tMove(obj,iTarget,fn){
			var iSpeed = 0;
			timer1 = setInterval(function(){
				iSpeed += (iTarget - obj.offsetTop)/5;
				iSpeed *= 0.7;
				obj.style.top = obj.offsetTop + iSpeed + 'px';
				if(iTarget==obj.offsetTop){
					clearInterval(obj.timer1);
					fn&&fn()
				}
			},30)
		}
		tMove(hImg1,65,function(){
			startMove(hImg2,{'width':263,'height':78},function(){
				startMove(hImg3,{'right':10},function(){
					textFn()
					clearInterval(timer4)
					timer4 = setInterval(function(){
						oBtnr.click()
					},2000)
				})
			})
		})
	//头部文字........................................................
		var hUl = document.getElementsByClassName('ndy')[0];
	      var hindex = 0;
	      function textFn(){
		      timer = setInterval(move,1500)
				  function move(){
				  	 hindex++;
				  	  if (hindex>5) {
				  	  	 hindex = 1;
				  	  	 hUl.style.top = 0;
				   }
				  	    startMove(hUl,{'top':-hindex*34})
				}
	      }
// content...............................................................
	//无缝滚动  		
		loUl.innerHTML += loUl.innerHTML;
		loUl.style.width = laLi.length*laLi[0].offsetWidth + "px";
	//lroll从下面出来,lxx、progress出现
		 function show(){
	 			startMove(lroll,{'bottom':0},function(){
			    startMove(lxx,{'opacity':100},function(){
				progress.style.opacity = 1;
				cancelAnimationFrame(id);
				lroll.style.zIndex = aindex;
				step();
			   })
		    })
		 }	
	//点击xx,消失
		lxx.onclick = function(){
			lxx.style.opacity = 0;
			cancelAnimationFrame(id);
			startMove(lroll,{'bottom':-400})	
		}
	//无缝滚动函数
		 function fnMove(){
			if(loUl.offsetLeft<-loUl.offsetWidth/2){
				loUl.style.left=0;			
			}
			else if(loUl.offsetLeft>0){
				loUl.style.left=-loUl.offsetWidth/2+'px';
			}
			loUl.style.left=loUl.offsetLeft+iSpeed+'px';
			var pwidth = Math.abs(loUl.offsetLeft + iSpeed)/(loUl.offsetWidth/2);
			progress_son.style.width = pwidth*progress.offsetWidth + "px";
		}
	// step()	
		  function step(){
		  	delay--;
			  	if(delay<0){
			  		fnMove()
			  	}
		  	id = requestAnimationFrame(step)
		  }
		  
		  loUl.onmouseenter = function(){
		  	 cancelAnimationFrame(id)
		  }
		   loUl.onmouseleave = function(){
		   		cancelAnimationFrame(id)
		   	    id = requestAnimationFrame(step)	  	 
		  } 	
	//鼠标移入事件
	   for (var i = 0; i < laLi.length; i++) {
	   	laLi[i].onmouseenter = function(){
	   		var search_max = this.getElementsByClassName('search_max')[0]; 
	   		var lDiv11 = this.getElementsByClassName('div11')[0];
	   		var lDiv2 = this.getElementsByClassName('div2')[0];       
	   		startMove(search_max,{'opacity':100});
	   		startMove(lDiv11,{'opacity':100});
	   		lDiv2.style.borderColor = "#3ae214" 
	   	  }
	   }   
     //鼠标移出事件
	   for (var i = 0; i < laLi.length; i++) {
	   	laLi[i].onmouseleave = function(){
	   		var search_max = this.getElementsByClassName('search_max')[0]; 
	   		var lDiv11 = this.getElementsByClassName('div11')[0];
	   		var lDiv2 = this.getElementsByClassName('div2')[0];       
	   		startMove(search_max,{'opacity':0});
	   		startMove(lDiv11,{'opacity':0});
	   		lDiv2.style.borderColor = "#f4f4f4" 
	   	  }
	   }
// main部分............................................................
	    var main = document.getElementsByClassName('main')[0];
	  	var oBtnl = document.getElementsByClassName('left')[0];
	  	var oBtnr = document.getElementsByClassName('right')[0];
	  	var main_inner = document.getElementsByClassName('main_inner')[0];
	  	var index = 0;
	  	var timer4 = null;
  	//小图滚动
	  	oBtnr.onclick = function(){
	  		index++;
	  		if(index>4){
	  			index=1;
	  			main_inner.style.left = 0;
	  		}
	  		startMove(main_inner,{'left':-index*220})
		  	} 	
		oBtnl.onclick = function(){
			index--;
			if(index<0){
				index=3;
				main_inner.style.left = -880+'px'
			}
			startMove(main_inner,{'left':-index*220})
		}
		 	oBtnl.onmouseenter=oBtnr.onmouseenter = function(){
		 	clearInterval(timer4)
	 	}
	 	oBtnl.onmouseleave = oBtnr.onmouseleave = function(){
		 	timer4 = setInterval(function(){
		  		oBtnr.click()
		  	},2000)
	 	}
// service.............................................................
		
	 	function startMove1(obj, json, fn){
 				var iSpeed = -10;
 				var iCur=0;	
				clearInterval(obj.timer);
			    obj.timer=setInterval(function (){	
				for(var attr in json){																				
					iCur=parseInt(getStyle(obj, attr));				   												
					obj.style[attr]=iCur+iSpeed+'px';
				}
				if (iCur<=Math.abs(iSpeed)) {
				 	obj.style[attr] = 0;
				 	clearInterval(obj.timer);
					fn&&fn()
				   }					
			}, 30)
       } 	
	 	function cover_recovery(){
	 		service_cover[0].style.width = "529px";
	 		service_cover[1].style.height = "91px";
	 		service_cover[2].style.height = "140px";
	 		service_cover[3].style.width = "201px";
	 		service_cover[4].style.width = "135px";
	 	}
	 	function cover_show(){
	 		startMove1(service_cover[0],{'width':0},function(){
        			startMove1(service_cover[1],{'height':0},function(){
        				startMove1(service_cover[2],{'height':0},function(){
        					startMove1(service_cover[3],{'width':0},function(){
        						startMove1(service_cover[4],{'width':0})
        					})
        				})
        			})
            })
	 	}       
	 	service_xx.onclick = function(){
	 		startMove(service,{'bottom':-400},function(){
	 		});	 		
	 	}	
// footer...............................................................		
		
		//alert(aLi.length)
		var a =firstDiv.offsetWidth;
		var b = aLi[0].offsetWidth;
		var c = middle.offsetLeft;
		var d = slide1.offsetWidth;	
		var slide1L = a + c + b/2 -d/2;
		slide1.style.left = slide1L + "px";
		slide2.style.left = a + "px";
		for (var i = 0; i < aLi.length; i++)
		{
			aLi[i].index = i;		
			aLi[i].addEventListener('click',function(){
				for (var j = 0; j < aLi.length; j++) {				
					aLi[j].className = "";
				}			
				 this.className = "border";
				startMove(slide2,{'left':a + this.index*b})
			});
		}	
 // footer点击........................................................
 		aLi[0].onclick = function(){
		cancelAnimationFrame(id)
		clearInterval(timer4)
		startMove(main,{'opacity':100});
		startMove(lroll,{'bottom':-400});		
		startMove(service,{'bottom':-400},function(){
			service.style.display = "none";
			cover_recovery()
		})
		timer4 = setInterval(function(){oBtnr.click()},2000)
	 }
	aLi[1].onclick = function(){	
		aindex += 1;		
		clearInterval(timer4)
		lroll.style.zIndex = aindex;
		cancelAnimationFrame(id)
		startMove(main,{'opacity':0});	
		startMove(service,{'bottom':-400},function(){
			cover_recovery()
			service.style.display = "none";			
		})
		show()			
	}
	aLi[2].onclick = function(){		
		aindex += 1;
		cancelAnimationFrame(id);
		startMove(main,{'opacity':0});
		startMove(lroll,{'bottom':-400},function(){
			step()
		});		
		service.style.display = "block";
		service.style.zIndex = aindex;
		startMove(service,{'bottom':0},function(){
			cover_show()
		})
	}	
}
