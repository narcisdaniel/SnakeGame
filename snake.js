const LEFT=37;
const RIGHT=39;
const UP=38;
const DOWN=40;

var dir=UP;
var X=20;
var Y=20;
var bodyX=[];
var bodyY=[];

var gameOver=0;
var appleX=13;
var appleY=13;
var snakeLen=4;
var canvas = document.getElementById("snake");
var matrix = [];
var max=0;

for(var i=0; i<40; i++) {
    	matrix[i] = [];
   	 for(var j=0; j<40; j++) {
       	 matrix[i][j] = canvas.getContext("2d");
       	 matrix[i][j].fillStyle = "#132313";
    		matrix[i][j].fillRect(i*15,j*15,15,15);
   		 }

	}
	
	
setInterval(function(){
	check();
	inite();
	draw();
	appleReset();
	drawB();
},70);


bodyY[0]=20;
bodyX[0]=20;
for(var i=1;i<4;i++){
		bodyX[i]=20;
		bodyY[i]=20+i;
	}
	
	
	document.onkeydown = function(e) {
    switch (e.keyCode) {
        case LEFT:
       		 e.preventDefault();
        	if(dir==RIGHT)
        		break;
            dir=LEFT;
            break;
        case RIGHT:
       		 e.preventDefault();
        	if(dir==LEFT)
        		break;
            dir=RIGHT;
            break;
        case UP:
       		 e.preventDefault();
        	if(dir==DOWN)
        		break;
            dir=UP;
            break;
        case DOWN:
       		 e.preventDefault();
        	if(dir==UP)
        		break;
            dir=DOWN;
            break;
    }
};
function check(){
	if(overlap(X,Y))
		reset();
}
function draw(){
		switch(dir){
		case LEFT:
		X--;
		if(X<0)
			X=39;
   	 	matrix[X][Y].fillStyle = "#00BFFF";
		matrix[X][Y].fillRect(X*15,Y*15,15,15);
		break;
		
		case RIGHT:
		X++;
		if(X>39)
			X=0;
   	 	matrix[X][Y].fillStyle = "#00BFFF";
		matrix[X][Y].fillRect(X*15,Y*15,15,15);
		break;
		
		case UP:
		Y--;
		if(Y<0)
			Y=39;
   	 	matrix[X][Y].fillStyle = "#00BFFF";
		matrix[X][Y].fillRect(X*15,Y*15,15,15);
		break;
		
		case DOWN:
		Y++;
		if(Y>39)
			Y=0;
   	 	matrix[X][Y].fillStyle = "#00BFFF";
		matrix[X][Y].fillRect(X*15,Y*15,15,15);
		break;
		}
		
}
function appleReset(){
	if(X==appleX && Y==appleY)
	{
		snakeLen+=5;
		appleX=Math.floor(Math.random()*40);
		appleY=Math.floor(Math.random()*40);
		while(overlap(appleX,appleY))
		{
			appleX=Math.floor(Math.random()*40);
			appleY=Math.floor(Math.random()*40);
		}

	}
	
}
function overlap(oX,oY){

	for(var i=0;i<snakeLen;i++)
		if(bodyX[i]==oX && bodyY[i]==oY)
			return true;
	return false;
}
function reset(){
	X=20;
	Y=20;
	
	bodyY[0]=20;
	bodyX[0]=20;
	for(var i=1;i<4;i++){
		bodyX[i]=20;
		bodyY[i]=20+i;
	}
	dir=UP;
	for(var i=0;i<snakeLen;i++)
	{
		bodyX[i]=40;
		bodyY[i]=40;
	}
	if(snakeLen>max)
		max=snakeLen;
	snakeLen=4;

}
function drawB(){
	for(var i=snakeLen-1;i>=1;i--){
		bodyX[i]=bodyX[i-1];
		bodyY[i]=bodyY[i-1];
		
	}
	for(var i=0;i<snakeLen;i++){
		
		matrix[bodyX[i]][bodyY[i]].fillStyle="#00BFFF";
		matrix[bodyX[i]][bodyY[i]].fillRect(bodyX[i]*15,bodyY[i]*15,15,15);

	}
	matrix[appleX][appleY]=canvas.getContext("2d");
	matrix[appleX][appleY].fillStyle="#b21c1c";
	matrix[appleX][appleY].fillRect(appleX*15,appleY*15,15,15);
	
}

	function inite(){
		for(var i=0; i<40; i++) {
    		matrix[i] = [];
 	  	 for(var j=0; j<40; j++) {
    	   	 matrix[i][j] = canvas.getContext("2d");
       		 matrix[i][j].fillStyle = "#131313";
    	     matrix[i][j].fillRect(i*15,j*15,15,15);
   		 	}
		}
		bodyX[0]=X;
		bodyY[0]=Y;
	}	





function responsivf() {
  var qwe = document.getElementsByClassName("nav-item");
  if (qwe[0].className === "nav-item") {
    qwe[0].className += " responsive";
    qwe[1].className += " responsive";
    qwe[2].className += " responsive";
    qwe[3].className += " responsive";
  } else {
    qwe[0].className = "nav-item";
    qwe[1].className = "nav-item";
    qwe[2].className = "nav-item";
    qwe[3].className = "nav-item";
  }
}
var oks=1;
var person;
t = document.getElementById("show")
var name= document.getElementById("person").value;
evt.addEventListener("click", fctn);
function calculeaza(){
	 if(oks==0){
	 	deleted();
	 }
	 var newContent = document.getElementById("person");
	 person=document.getElementById("person").value;
	 var nc=document.createTextNode(person+", your highscore is "+max);
	 var currel=document.getElementById("null_content");
	 if(oks==1){
	 	currel.appendChild(nc);
	 	oks=0;
	 }
	 	
	 

}
function deleted(){
	var sterg=document.getElementById("null_content");
	var myRemovedLink = sterg.lastChild;
	oks=1;
	sterg.removeChild(myRemovedLink);

}