!function(w){
	w.time = function(tm,cb,bool){
		var prev = 0;
		if(tm.length){
			tm.forEach(function(n,i){
				prev += n;
				setTimeout(cb[i] || null , i && bool ? prev  : n );
			});
		};
	};
}(window);