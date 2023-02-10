img = [];

function preload(){
  for(let i = 1; i < 22; i++){
    img[i] = loadImage("transform/f_"+ nf(i*4,5) +".png");
    img[i].resize(width/4,height/4);
  }
}

function setup() {
  createCanvas(1080, 1080);

}

function draw() {
  background(0);
  
  let mi = map(mouseY,0,height,1,22);
  
  image(img[int(mi)],0,0);
  
}
