var add=document.getElementsByClassName("add");//加号
var cr11=document.getElementsByClassName("cr11");//切换的图片
var als=document.getElementsByClassName("als")[0];
var alz=als.children;//名字切换
var line4=document.getElementsByClassName("line4")[0];
for(var i=0;i<add.length;i++){
	add[i].onclick=function (){
		var s=this.getAttribute("al");
		for(var j=0;j<add.length;j++){
				cr11[j].style.display="none";
				alz[j].className="";
				add[j].innerHTML="+";
			}
		if(this.innerHTML=="+"){
			
			this.innerHTML="-";
			alz[s].className="active";
			alz[s].style.color="red";
			cr11[s].style.display="block";
		}else{
			this.innerHTML="+";
			a[s].className="active";
			cr11[s].style.display="none";
		}
		if(add[1].innerHTML=="-"){
			line4.style.marginTop="36px";
		}else if(add[2].innerHTML=="-"){
			line4.style.marginTop="70px";
		}else if(add[0].innerHTML=="-"){
			line4.style.marginTop="4px";
		}else if(add[3].innerHTML=="-"){
			line4.style.marginTop="105px";
		}else if(add[4].innerHTML=="-"){
			line4.style.marginTop="140px";
		}else if(add[5].innerHTML=="-"){
			line4.style.marginTop="175px";
		}
	}
}
add[0].innerHTML="-";
cr11[0].style.display="block";
alz[0].style.color="red";
