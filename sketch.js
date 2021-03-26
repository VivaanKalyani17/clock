function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  translate(200,200) 
  rotate(-90)

hr = hour()
mn = minute()
sc = second()

scAngle=map(sc,0,60,0,360)
mnAngle=map(mn,0,60,0,360)
hrAngle=map(hr%12,0,12,0,360)
push(); rotate(scAngle); stroke(255,0,0); strokeWeight(4); line(0,0,100,0); pop()
push(); rotate(mnAngle); stroke("orange"); strokeWeight(5); line(0,0,80,0); pop()
push(); rotate(hrAngle); stroke("blue"); strokeWeight(7); line(0,0,50,0); pop()
strokeWeight(10); 
noFill();
 stroke(255,0,0); arc(0,0,280,280,0,scAngle);
 stroke("orange"); arc(0,0,260,260,0,mnAngle);
 stroke("blue"); arc(0,0,300,300,0,hrAngle);
  drawSprites();


}