var ids=document.getElementsByClassName("ids")[0];
var a=ids.getElementsByTagName("a");//4个地名
var ids1=document.getElementsByClassName("ids1")[0];
var a1=ids1.getElementsByTagName("a");//16个场馆名字
var line4=document.getElementsByClassName("line4")[0];//圆形图标
var add=document.getElementsByClassName("add");//加号
var lline=document.getElementsByClassName("lline")[0];
var lis=lline.getElementsByTagName("li");//每一个地址
var contR=document.getElementsByClassName("contR");//被切换的卡片
for(var i=0;i<add.length;i++){//加号的切换
	add[i].onclick=function(){
		var s=this.parentNode.getAttribute("all");
		for(var j=0;j<add.length;j++){
				a[j].className="";
				add[j].innerHTML="+";
				add[j].parentNode.nextElementSibling.style.display="none";
			}
		if(this.innerHTML=="+"){
			this.innerHTML="-";
			a[s].className="active";
			this.parentNode.nextElementSibling.style.display="block";
			
		}else{
			this.innerHTML="+";
			this.parentNode.nextElementSibling.style.display="none";
		}
		if(add[1].innerHTML=="-"){//圆形图标
			line4.style.marginTop="36px";
		}else if(add[2].innerHTML=="-"){
			line4.style.marginTop="70px";
		}else if(add[0].innerHTML=="-"){
			line4.style.marginTop="4px";
		}else if(add[3].innerHTML=="-"){
			line4.style.marginTop="105px";
		}
	}
}

//选项卡切换
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		var s=this.getAttribute("ly");//自定义下标
		for(var j=0;j<lis.length;j++){
			a1[j].className="";
			contR[j].className="contR right";
		}
		contR[s].className="contR right active";
		a1[s].className="active";
		a1[s].style.color="red";
	}
}














































//底部轮播图
var pcsp = document.getElementsByClassName("pcsp")[0];
var btns = pcsp.getElementsByTagName("button");
for(var i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
		if(this.innerHTML == "&lt;") {
			console.log("左")
		} else {
			console.log("右")
		}
	}

}