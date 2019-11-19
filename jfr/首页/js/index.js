var pb = document.getElementsByClassName("pb")[0];
var bgpic = pb.getElementsByClassName("bgpic")[0];
var imgs = bgpic.getElementsByTagName("img");
var btns = pb.getElementsByTagName("button");
var lis = pb.getElementsByTagName("li");
var j = 0;
for(var i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
		if(this.innerHTML == "&gt;") {
			j++;
			if(j == 4) {
				j = 0;
			}
			for(var i = 0; i < imgs.length; i++) {
				imgs[i].className = "";
				lis[i].className = "";
			}
			imgs[j].className = "active";
			lis[j].className = "active";
		} else {
			j--;
			if(j == -1) {
				j = 3;
			}
			for(var i = 0; i < imgs.length; i++) {
				imgs[i].className = "";
				lis[i].className = "";
			}
			imgs[j].className = "active";
			lis[j].className = "active";
		}
	}
}
for(var i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		j = this.getAttribute("al");
		for(var s = 0; s < lis.length; s++) {
			imgs[s].className = "";
			lis[s].className = "";
		}
		imgs[j].className = "active";
		lis[j].className = "active";
	}
}
timer = setInterval(function() {
	j++;
	if(j == 4) {
		j = 0;
	}
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].className = "";
		lis[i].className = "";
	}
	imgs[j].className = "active";
	lis[j].className = "active";
}, 1000)
pb.onmouseover = function() {
	clearInterval(timer);
	timer = null;
}
pb.onmouseout = function() {
	timer = setInterval(function() {
		j++;
		if(j == 4) {
			j = 0;
		}
		for(var i = 0; i < imgs.length; i++) {
			imgs[i].className = "";
			lis[i].className = "";
		}
		imgs[j].className = "active";
		lis[j].className = "active";
	}, 1000)
}