var add = document.getElementsByClassName("add"); //切换的按钮
var contR = document.getElementsByClassName("contR"); //变换的图片
var line4=document.getElementsByClassName("line4")[0];
var fg=document.getElementsByClassName("fg");
for(var i = 0; i < add.length; i++) {
	add[i].onclick = function() {
		var s = this.getAttribute("al");
		if(this.innerHTML == "+") {
			for(var j = 0; j < add.length; j++) {
				contR[j].style.display = "none";
				fg[j].style.display="none";
				add[j].innerHTML = "+";
			}
			this.innerHTML = "-";
			fg[s].style.display="block";
			fg[s].style.color="red";
			contR[s].style.display = "block";
		} else {
			for(var j = 0; j < add.length; j++) {
				contR[j].style.display = "block";
				fg[j].style.display="block";
				add[j].innerHTML = "+";
			}
			this.innerHTML = "+";
			fg[s].style.display="none";
			contR[s].style.display = "none"
		}
		if(add[1].innerHTML=="-"){
			line4.style.marginTop="36px";
		}else if(add[2].innerHTML=="-"){
			line4.style.marginTop="70px";
		}else if(add[0].innerHTML=="-"){
			line4.style.marginTop="4px";
		}
	}
}
add[0].innerHTML="-";
contR[0].style.display="block";
