	var $big = $('.big');
	var $inner = $('.inner');
	var $img = $('.inner img');
	var index = 0;
	var $li = $('.ul1 li');
	var timer = null;
	timer = setInterval(function(){
		index++;
		if(index>3){
			index=1;
			$inner.css({
				"left":0
			})
		}
		console.log(index)
		move()
		liFn()
	},2000)
	function move(){
		$inner.animate({
			"left":-index*$img.width()
		},1000)
	}
	
	function liFn(){
		if(index>=3){
			var j = 0
		}else{
			var j = index
		}
		$li.css({
			background:""
		})
		$li.eq(j).css({
			background:"red"
		})
		
	}

