const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const canvas2 = document.querySelector('#try');
const ctx2 = canvas2.getContext('2d');
//consts
const sizeOfCanvas=7;
var isEnd=false;

//datas
let prevTime = performance.now();

class sides {
    constructor(n, e,s,w) {
      this.n = n;
      this.e = e;
      this.s = s;
      this.w = w;
    }
  }

class place { 
  
    constructor(x, y,filename) {
      this.x = x;
      this.y = y;
      this.s= new sides(0,0,0,0);
      this.t=0;
      this.filename=filename;
      this.treasure=0;
    }
  }

  let places=new Array();

//
//Start();
let player = new place(125,125);
let additionalcard = new place(0,0);
var numOfTreaures=3;
placeloc();


//uptade()

function gameLoop(now = performance.now()) {
    const dt = (now - prevTime) / 1000;
    prevTime = now;






    update(dt);
    draw();
if(!isEnd)
    requestAnimationFrame(gameLoop);
    else {document.getElementById("FINAL").innerHTML="YOU WIN";}
}



//uptade
function update(dt) {
 
    // Updating application state
}

function isEnded(){console.log(findIdOfPlace());
if(findIdOfPlace().treasure==1){
    console.log("Treasure founded");
    findIdOfPlace().treasure=0;
numOfTreaures-=1;}
isEnd= (numOfTreaures==0);
}

//draw
function draw() {
    ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 900, 900);

//places you can put card  ,,, white dots
ctx.fillStyle = "white";
ctx.fillRect(225, 25, 50, 50); ctx.fillRect(225, 815, 50, 50);
ctx.fillRect(425, 25, 50, 50); ctx.fillRect(425, 815, 50, 50);
ctx.fillRect(625, 25, 50, 50); ctx.fillRect(625, 815, 50, 50);
ctx.fillRect(25, 225, 50, 50); ctx.fillRect(815, 225, 50, 50);
ctx.fillRect(25, 425, 50, 50); ctx.fillRect(815, 425, 50, 50);
ctx.fillRect(25, 625, 50, 50); ctx.fillRect(815, 625, 50, 50);
//places

for(let i=0;i<sizeOfCanvas*sizeOfCanvas;i++){
    let x = new Image();
    x.src=places[i].filename;

    
    ctx.drawImage(x,places[i].x, places[i].y, 90, 90);
if(places[i].treasure== 1){
    
ctx.fillStyle="yellow";
ctx.fillRect(places[i].x+35, places[i].y+35, 25, 25);


}
}


//player





ctx.fillStyle = "green";
ctx.fillRect(player.x, player.y, 40, 40);
    // Drawing

//Second Canvas
ctx2.fillStyle="blue";
let x = new Image();
x.src=additionalcard.filename;


ctx2.drawImage(x,additionalcard.x, additionalcard.y, 100, 100);

}

// Start
gameLoop();

//movement
document.addEventListener('keydown', event => {
    event.preventDefault(); 

if (event.keyCode < 37 || event.keyCode > 40) {
  return;
}

switch (event.keyCode) {

    case 37:
    if(CanIMove(37))player.x-=100;
    isEnded();
    break;
    
    case 38:
        if(CanIMove(38))player.y-=100;
        isEnded();
    break;
    
    case 39:
        if(CanIMove(39))player.x+=100;
        isEnded();
    break;
   
    case 40:
        if(CanIMove(40))player.y+=100;
        isEnded();
    break;
}
    
});

//helper functions

/*this.s= new sides(0,0,0,0);
      this.t=0;
      this.filename=filename;
      this.treasure=0;*/
//put  Cards
function putCard(e){
let cache;let filename;let t; let treasure; let s= new sides(0,0,0,0);
    switch (e) {
        
        case 1:
              filename=places[13].filename; t=places[13].t;  treasure=places[13].treasure;  s=places[13].s;
        for(let i=13;i>7;i--){
            places[i].filename=places[i-1].filename; places[i].t=places[i-1].t;  places[i].treasure=places[i-1].treasure; places[i].s=places[i-1].s; 
        }
        places[7].filename=additionalcard.filename;  places[7].t=additionalcard.t;  places[7].treasure=additionalcard.treasure; places[7].s=additionalcard.s; 

        additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
        if(player.x==225){if(player.y<=625)player.y+=100;else player.y=125}
        
        
        break;
        case 2:
              filename=places[27].filename; t=places[27].t;  treasure=places[27].treasure;  s=places[27].s;
            for(let i=27;i>21;i--){
                places[i].filename=places[i-1].filename; places[i].t=places[i-1].t;  places[i].treasure=places[i-1].treasure; places[i].s=places[i-1].s; 
            }
            places[21].filename=additionalcard.filename;  places[21].t=additionalcard.t;  places[21].treasure=additionalcard.treasure; places[21].s=additionalcard.s; 
    
            additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
            if(player.x==425){if(player.y<=625)player.y+=100;else player.y=125}
            
            
            break;
            case 3:
                filename=places[41].filename; t=places[41].t;  treasure=places[41].treasure;  s=places[41].s;;
                for(let i=41;i>35;i--){
                    places[i].filename=places[i-1].filename; places[i].t=places[i-1].t;  places[i].treasure=places[i-1].treasure; places[i].s=places[i-1].s; 
                }
                places[35].filename=additionalcard.filename;  places[35].t=additionalcard.t;  places[35].treasure=additionalcard.treasure; places[35].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.x==625){if(player.y<=625)player.y+=100;else player.y=125}   
                
                
                break;
            case 7://41 35
                filename=places[35].filename; t=places[35].t;  treasure=places[35].treasure;  s=places[35].s;
                for(let i=35;i<41;i++){
                    places[i].filename=places[i+1].filename; places[i].t=places[i+1].t;  places[i].treasure=places[i+1].treasure; places[i].s=places[i+1].s; 
                }
                places[41].filename=additionalcard.filename;  places[41].t=additionalcard.t;  places[41].treasure=additionalcard.treasure; places[41].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.x==625){if(player.y>=225)player.y-=100;else player.y=725}  
                
                
                break;
            case 8://27 21
                filename=places[21].filename; t=places[21].t;  treasure=places[21].treasure;  s=places[21].s;
                for(let i=21;i<27;i++){
                    places[i].filename=places[i+1].filename; places[i].t=places[i+1].t;  places[i].treasure=places[i+1].treasure; places[i].s=places[i+1].s; 
                }
                places[27].filename=additionalcard.filename;  places[27].t=additionalcard.t;  places[27].treasure=additionalcard.treasure; places[27].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.x==425){if(player.y>=225)player.y-=100;else player.y=725} 

                
                
                break;
            case 9://13 12 11 10 9 8 7
                filename=places[7].filename; t=places[7].t;  treasure=places[7].treasure;  s=places[7].s;
                for(let i=7;i<13;i++){
                    places[i].filename=places[i+1].filename; places[i].t=places[i+1].t;  places[i].treasure=places[i+1].treasure; places[i].s=places[i+1].s; 
                }
                places[13].filename=additionalcard.filename;  places[13].t=additionalcard.t;  places[13].treasure=additionalcard.treasure; places[13].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.x==225){if(player.y>=225)player.y-=100;else player.y=725} 

                
                
                break;
            ////////////////////////////////////
            case 4://1 8 15 22 29 36 43 // 41 36 29 22 15 8 1
                filename=places[1].filename; t=places[1].t;  treasure=places[1].treasure;  s=places[1].s;
                for(let i=1;i<43;i+=7){
                    places[i].filename=places[i+7].filename; places[i].t=places[i+7].t;  places[i].treasure=places[i+7].treasure; places[i].s=places[i+7].s; 
                }
                places[43].filename=additionalcard.filename;  places[43].t=additionalcard.t;  places[43].treasure=additionalcard.treasure; places[43].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.y==225){if(player.x>=225)player.x-=100;else player.x=725}
                
                
                break;
            case 5://3 11 17 24 31 38 45 // 41 36 29 22 15 8 1
                filename=places[3].filename; t=places[3].t;  treasure=places[3].treasure;  s=places[3].s;
                for(let i=3;i<45;i+=7){
                    places[i].filename=places[i+7].filename; places[i].t=places[i+7].t;  places[i].treasure=places[i+7].treasure; places[i].s=places[i+7].s; 
                }
                places[45].filename=additionalcard.filename;  places[45].t=additionalcard.t;  places[45].treasure=additionalcard.treasure; places[45].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.y==425){if(player.x>=225)player.x-=100;else player.x=725}
                
                
                break;
            case 6://3 11 17 24 31 38 45 // 41 36 29 22 15 8 1
                filename=places[5].filename; t=places[5].t;  treasure=places[5].treasure;  s=places[5].s;
                for(let i=5;i<47;i+=7){
                    places[i].filename=places[i+7].filename; places[i].t=places[i+7].t;  places[i].treasure=places[i+7].treasure; places[i].s=places[i+7].s; 
                }
                places[47].filename=additionalcard.filename;  places[47].t=additionalcard.t;  places[47].treasure=additionalcard.treasure; places[47].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.y==625){if(player.x>=225)player.x-=100;else player.x=725}
                
                
                break;
            case 10://5 11 17 24 31 38 47 // 41 36 29 22 15 8 1
                filename=places[47].filename; t=places[47].t;  treasure=places[47].treasure;  s=places[47].s;
                for(let i=47;i>5;i-=7){
                    places[i].filename=places[i-7].filename; places[i].t=places[i-7].t;  places[i].treasure=places[i-7].treasure; places[i].s=places[i-7].s; 
                }
                places[5].filename=additionalcard.filename;  places[5].t=additionalcard.t;  places[5].treasure=additionalcard.treasure; places[5].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
            
                if(player.y==625){if(player.x<=625)player.x+=100;else player.x=125}
                
                break;
            case 11://5 11 17 24 31 38 47 // 41 36 29 22 15 8 1
                filename=places[45].filename; t=places[45].t;  treasure=places[45].treasure;  s=places[45].s;
                for(let i=45;i>3;i-=7){
                    places[i].filename=places[i-7].filename; places[i].t=places[i-7].t;  places[i].treasure=places[i-7].treasure; places[i].s=places[i-7].s; 
                }
                places[3].filename=additionalcard.filename;  places[3].t=additionalcard.t;  places[3].treasure=additionalcard.treasure; places[3].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.y==425){if(player.x<=625)player.x+=100;else player.x=125}
                
                
                break;
            case 12://5 11 17 24 31 38 47 // 41 36 29 22 15 8 1
                filename=places[43].filename; t=places[43].t;  treasure=places[43].treasure;  s=places[43].s;
                for(let i=43;i>1;i-=7){
                    places[i].filename=places[i-7].filename; places[i].t=places[i-7].t;  places[i].treasure=places[i-7].treasure; places[i].s=places[i-7].s; 
                }
                places[1].filename=additionalcard.filename;  places[1].t=additionalcard.t;  places[1].treasure=additionalcard.treasure; places[1].s=additionalcard.s; 
        
                additionalcard.filename=filename;  additionalcard.t=t;  additionalcard.treasure=treasure; additionalcard.s=s; 
                if(player.y==225){if(player.x<=625)player.x+=100;else player.x=125}
                
                
                break;             
 
    }












}
document.addEventListener("click", printMousePos);
//can i move in lab
function CanIMove(e){
let b= true;

switch (e) {

    case 37:
    if((player.x==125)|| (findps(e).e==0
    ) ||findpsofItself().w==0
        
        
        ){b=false}

    
    break;
    
    case 38:
        if(player.y==125 || (findps(e).s==0
            
        )||findpsofItself().n==0
        ){b=false}
    break;
    
    case 39:
        if(player.x==725 || (findps(e).w==0
        )||findpsofItself().e==0
        ){b=false}
    break;
   
    case 40:
        if(player.y==725 || (findps(e).n==0
         )||findpsofItself().s==0
          ){b=false}
    break;
}



return b;
}
//mouce click cords?
function printMousePos(event) {
    console.log(player.x + " " +player.y);
    /*
    console.log(
      "clientX: " + event.clientX +
      " - clientY: " + event.clientY);*/

  /*  for(let i=0;i<49;i++)places[i]=rotate(places[i]);
    console.log(places);*/
let x=event.clientX;
let y =event.clientY;
/*ctx.fillRect(225, 25, 50, 50); ctx.fillRect(225, 815, 50, 50);
ctx.fillRect(425, 25, 50, 50); ctx.fillRect(425, 815, 50, 50);
ctx.fillRect(625, 25, 50, 50); ctx.fillRect(625, 815, 50, 50);
ctx.fillRect(25, 225, 50, 50); ctx.fillRect(815, 225, 50, 50);
ctx.fillRect(25, 425, 50, 50); ctx.fillRect(815, 425, 50, 50);
ctx.fillRect(25, 625, 50, 50); ctx.fillRect(815, 625, 50, 50);*/  

if(x>=232 && x<=282 && y>=33 &&y<=83)putCard(1);    if(x>=232 && x<=282 && y>=823 &&y<=873)putCard(9);
if(x>=432 && x<=482 && y>=33 &&y<=83)putCard(2);   if(x>=432 && x<=482 && y>=823 &&y<=873)putCard(8);
if(x>=632 && x<=682 && y>=33 &&y<=83)putCard(3);    if(x>=632 && x<=682 && y>=823 &&y<=873)putCard(7);


if(x>=32 && x<=82 && y>=233 &&y<=283)putCard(12);    if(x>=822 && x<=872 && y>=233 &&y<=283)putCard(4);
if(x>=32 && x<=82 && y>=433 &&y<=483)putCard(11);    if(x>=822 && x<=872 && y>=433 &&y<=483)putCard(5);
if(x>=32 && x<=82 && y>=633 &&y<=683)putCard(10);    if(x>=822 && x<=872 && y>=633 &&y<=683)putCard(6);


//Rotate additional card
if(x>=8 && x<=108&&y>=953 && y<=1053)additionalcard=rotate(additionalcard);



  }

  

//PLEASE ROTATE ME
function rotate (tile){
let a= tile.s.s;
let b=tile.s.w;
let c=tile.s.n;
let d=tile.s.e;
tile.s.w=a;
tile.s.n=b;
tile.s.e=c;
tile.s.s=a;



if(tile.filename=="2.png"){tile.filename="7.png"; tile.s.w=1;
tile.s.n=0;
tile.s.e=1;
tile.s.s=0;
}
else if(tile.filename=="7.png"){tile.filename="2.png";tile.s.w=0;
tile.s.n=1;
tile.s.e=0;
tile.s.s=1;}

else if(tile.filename=="1.png"){tile.filename="4.png";tile.s.w=1;
tile.s.n=0;
tile.s.e=0;
tile.s.s=1;}
else if(tile.filename=="4.png"){tile.filename="5.png";tile.s.w=1;
tile.s.n=1;
tile.s.e=0;
tile.s.s=0;}
else if(tile.filename=="5.png"){tile.filename="6.png";tile.s.w=0;
tile.s.n=1;
tile.s.e=1;
tile.s.s=0;}
else if(tile.filename=="6.png"){tile.filename="1.png";tile.s.w=0;
tile.s.n=0;
tile.s.e=1;
tile.s.s=1;}

else if(tile.filename=="3.png"){tile.filename="8.png";tile.s.w=0;
tile.s.n=1;
tile.s.e=1;
tile.s.s=1;}
else if(tile.filename=="8.png"){tile.filename="9.png";tile.s.w=1;
tile.s.n=0;
tile.s.e=1;
tile.s.s=1;}
else if(tile.filename=="9.png"){tile.filename="10.png";tile.s.w=1;
tile.s.n=1;
tile.s.e=0;
tile.s.s=1;}
else if(tile.filename=="10.png"){tile.filename="3.png";tile.s.w=1;
tile.s.n=1;
tile.s.e=1;
tile.s.s=0;
}
return tile;
}

//can I go to next tile?
function findps(e){
realX=player.x-25;
realY=player.y-25;
let i;
for( i=0;i<49;i++){
    if(realX==places[i].x &&realY==places[i].y ){
        break;

    }
}

if(e==40)return places[i+1].s;
else if (e==38)return places[i-1].s;
else if (e==37)return places[i-7].s;
else return places[i+7].s;

}
//find psof itself
function findpsofItself(){
    realX=player.x-25;
    realY=player.y-25;
    let i;
    for( i=0;i<49;i++){
        if(realX==places[i].x &&realY==places[i].y ){
            break;
    
        }
    }
    
    return places[i].s;
    
    
    }
    function findIdOfPlace(){
        realX=player.x-25;
        realY=player.y-25;
        let i;
        for( i=0;i<49;i++){
            if(realX==places[i].x &&realY==places[i].y ){
                break;
        
            }
        }
        
        return places[i];
        
        
        }



//
function placeloc(){
   // console.log(Math.floor(Math.random() * 3)+1);
    
  // var items = [1, 5, 7];
    
   //places
    let x=100;let y=50;
for (let i=0;i<sizeOfCanvas;i++){y=100;
for(let e=0;e<sizeOfCanvas;e++){
    let filename;
    //let c=items[Math.floor(Math.random()*items.length)];
    let c = Math.floor(Math.random() * 3) + 1;
    
    filename=c.toString()+".png";
    let a= new place(x,y,filename);
    if(c==2){a.s.n=1;a.s.s=1;
        a.s.e=0;a.s.w=0;
    
    }
    if(c==1){a.s.n=0;a.s.s=1;
        a.s.e=1;a.s.w=0;
    
    }
    if(c==3){a.s.n=1;a.s.s=0;
        a.s.e=1;a.s.w=1;
    
    }
    places.push(a);
y+=100;
}
x+=100;








}
console.log (places);
//lets increase different options
for(let i=0;i<49;i++){
    c = Math.floor(Math.random() * 5);
  // console.log(c);
    while(c>0){
        places[i]=rotate(places[i]);
        c=c-1;
    }



}

let filename;

let d = Math.floor(Math.random() * 3) + 1;

filename=d.toString()+".png";
let a= new place(0,0,filename);
if(d==2){a.s.n=1;a.s.s=1;
    a.s.e=0;a.s.w=0;

}
if(d==1){a.s.n=0;a.s.s=1;
    a.s.e=1;a.s.w=0;

}
if(d==3){a.s.n=1;a.s.s=0;
    a.s.e=1;a.s.w=1;

}
d = Math.floor(Math.random() * 5)+1;
// console.log(c);
 while(d>0){
     a=rotate(a);
     d-=1;
 }
additionalcard=a;

if( places[0].filename=="5.png")places[0]=rotate(places[0]);
else if( places[6].filename=="4.png")places[6]=rotate(places[6]);
else if( places[42].filename=="6.png")places[42]=rotate(places[42]);
else if( places[48].filename=="1.png")places[48]=rotate(places[48]);



//lets put some treasures

let de = new Array();
de= getRandom (numOfTreaures);
//Array.from({length: numOfTreaures}, () => Math.floor(Math.random() * 49));
//while (allUnique(de,numOfTreaures)  )



//console.log(de);
//let de = getRandom()
for(let i=0;i<numOfTreaures;i++){

places[de[i]].treasure=1;

}



}


/////try
function getRandom(n) {
    let arr= new Array();
    for (let i=1;i<49;i++){
if(i!=6 &&i!=42)arr.push(i);

    }


    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    console.log(result);
    return result;
}



