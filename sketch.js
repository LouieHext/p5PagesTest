let r1;
let r2;
let r3;
let pos_x;
let pos_y;
let theta_step;
let phi_step;
let coeff;
let theta;
let phi;
let fake_hour;
let fake_min;


function setup() {
  createCanvas(windowWidth, windowHeight);
  r1=width/8;
  r2=width/16;
  r3=width/40;
  coeff=0.8;
  fake_hour=9;
  fake_min=28;
  
  
  theta_step=-PI/2000*fake_hour*0.75;
  phi_step=-PI/2000*fake_min;
  theta=0;
  phi=0;
}
function update(){
}
function draw() {
  if (frameCount==1){
    fill(0);
    rect(0,0,width,height);
  }  

  noStroke();
  fill(0,0,0,5);
  
  rect(0,0,width,height);
  translate(width/2,height/2);
  for(let i=0; i<200;i++){
      pos_x=r1*cos(theta)+(r2+r3*coeff)*cos(phi);
      pos_y=r1*sin(theta)+(r2+r3*coeff)*sin(phi);
      fill(255,155,0,40);
      circle(pos_x,pos_y,15);
      theta=theta+theta_step;
      phi=phi+phi_step;
  }
}

function keyPressed() {
  
  if (key ==='w') {
    fake_hour += 1;
    theta_step=-PI/2000*fake_hour;
    phi_step=-PI/2000*fake_min;
    fill(0);
    translate(-width/2,-height/2);
    rect(0,0,width,height);
  } 
  if (key ==='s') {
    fake_hour -=1;
    theta_step=-PI/200*fake_hour;
    phi_step=-PI/2000*fake_min;
    fill(0);
    translate(-width/2,-height/2);
    rect(0,0,width,height);
  }
  if (key ==='a') {
    fake_min -=1;
    theta_step=-PI/2000*fake_hour;
    phi_step=-PI/2000*fake_min;
    fill(0);
    translate(-width/2,-height/2);
    rect(0,0,width,height);
  }
  if (key ==='d') {
    fake_min +=1;
    theta_step=-PI/2000*fake_hour;
    phi_step=-PI/2000*fake_min;
    fill(0);
    translate(-width/2,-height/2);
    rect(0,0,width,height);
  }
}
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);    
}
