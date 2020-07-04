var colors=randomColors();
var squares=document.querySelectorAll(".square");
var ccode=document.querySelector("#colorcode");
var messagedisplay=document.querySelector("#message");
var chosenColor=colors[Math.floor(Math.random()*6)];
var colchange=document.querySelector("#changecolor");
var htp=document.querySelector("#howtoplay");

colchange.addEventListener("click",function(){
	window.location.reload();
});

htp.addEventListener("click",function(){
	alert("You have to guess the possible color out of these six given colors. rgb stands for red, green and blue. The maximum possible value can be 255 for any of these three. eg. red= rgb(255,0,0) and green=rgb(0,255,0)");
});


ccode.textContent=chosenColor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(chosenColor == clickedcolor){
			messagedisplay.textContent=" Correct !"
			changecolors(this.style.backgroundColor);
			var s=document.querySelector("#mains");
			s.style.backgroundColor=this.style.backgroundColor;

		}else{
			messagedisplay.textContent=" Wrong !"
			this.style.backgroundColor="black";
		}
	});
}
function changecolors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function randomColors(){
	var arr=[];
	for(var i=0;i<6;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	return(arr);
}