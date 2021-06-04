let cross = true;
function start(){
 
 const message = document.getElementById("gamestart");
    
    if(message.innerText == "START")
    {
       message.style.visibility = "hidden";
    }
    else{
        message.innerText = "START";
        cross = true;
         brick1.classList.add('brickrun');
            brick2.classList.add('brickrun');
             start();  
    }
    let i=1;
    mario.classList.add('marioStart');
    setTimeout(() => {
                 mario.classList.remove('marioStart');
                 mario.style.top = "60vh";
             }, 1000);
   
 let curscore = 0;

 var GameEngine = setInterval(() => {
     console.log("AAKILJD");
     const main = document.getElementById("main");
     const brick1 = document.getElementById("brick1");
     const brick2 = document.getElementById("brick2");
     const mario = document.getElementById('mario');
     const score = document.getElementById('score');

     dx = window.getComputedStyle(mario, null).getPropertyValue("left");
     dy = window.getComputedStyle(mario, null).getPropertyValue("top");

     db1x = parseInt(window.getComputedStyle(brick1, null).getPropertyValue("left"));
     db1y = parseInt(window.getComputedStyle(brick1, null).getPropertyValue("top"));

     db2x = parseInt(window.getComputedStyle(brick2, null).getPropertyValue("left"));
     db2y = parseInt(window.getComputedStyle(brick2, null).getPropertyValue("top"));

        document.onkeydown = function (e) {
         const mario = document.getElementById("mario");
         dx = window.getComputedStyle(mario, null).getPropertyValue("left");
         if (e.key == 'ArrowLeft') {
             mario.style.left = parseInt(dx) - 10 + 'px';
         }
         else if (e.key == 'ArrowRight') {
             mario.style.left = parseInt(dx) + 10 + 'px';
         }
         else if (e.key == 'ArrowUp' || e.key == ' ') {
             mario.classList.add('marioAnimate');
             setTimeout(() => {
                 mario.classList.remove('marioAnimate');
             }, 1500);
         }
       
     }
     if((parseInt(dx)<= db1x+110 && parseInt(dx)>= db1x-110) && (parseInt(dy)>335 && parseInt(dy)<366)){
           end();
           clearInterval(GameEngine);
     }
     else if((parseInt(dx)<= db2x+110 && parseInt(dx)>= db2x-110)  && (parseInt(dy)>335 && parseInt(dy)<366)){
           end();
           clearInterval(GameEngine);
     }
     else if(cross == true)
     {  
          if(i == 100)
          {
             curscore += 1;
          score.innerText = curscore;
          i=1;
          }
          i++;
        
     }
     
     
     
     if (parseInt(dx) >= 1130) {
         console.log("YES");
         mario.style.left = "0px";
     }
     else if (parseInt(dx) < 0) {
         mario.style.left = "1129px";
     }
 }, 10);
 function end(){
       console.log("END");                
            brick1.classList.remove('brickrun');
            brick2.classList.remove('brickrun');
            mario.classList.remove('marioAnimate');
            mario.style.left = "0";
            cross = false;
            clearInterval(GameEngine);
            message.style.visibility = "visible";
            message.innerText = "GAME OVER!! CLICK FOR RESTART";
            
     }
     return 0;
}
