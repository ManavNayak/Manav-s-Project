var bg;
var brand, brandImg, box1;
var box2, main, load, title, mainImg, loadImg, titleImg;
var greet, greetImg, bgm, mi, my, ch, miImg, myImg, chImg, sett, settImg;
var rate, rateImg, back1, back1Img, dt, dtImg, fw, fwImg, htp, htpImg;

var gameState = "BRAND";

function preload(){

  bg = loadImage("images/bg.jpeg");
  brandImg = loadImage("images/brand.png");
  mainImg = loadImage("images/main.jpg");
  loadImg = loadImage("images/load.png");
  titleImg = loadImage("images/title.jpg");
  greetImg = loadImage("images/greet.jpg");
  miImg = loadImage("images/mi.png");
  myImg = loadImage("images/my.png");
  chImg = loadImage("images/ch.png");
  settImg = loadImage("images/sett.png");
  rateImg = loadImage("images/rate.png");
  htpImg = loadImage("images/htp.png");
  dtImg = loadImage("images/dt.png");
  fwImg = loadImage("images/fw.png");
  back1Img = loadImage("images/back.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  brand = createSprite(width/2-150, height/4);
  brand.addImage("brand", brandImg);
  brand.scale = 2.5;

  main = createSprite(width/2-150 , height/4+150, 100, 100);
  main.addImage("main", mainImg);
  main.scale = 2.5;
  main.visible = false;

  greet = createSprite(width/2 , height/4, 100, 100);
  greet.addImage("greet", greetImg);
  greet.scale = 1;
  greet.visible = false;

  load = createSprite(width/2-300, height/2+300, 100, 100);
  load.addImage("load", loadImg);
  load.scale = 1.5;
  load.visible = false;

  title = createSprite(width/2-150 , 100, 100, 100);
  title.addImage("title", titleImg);
  title.scale = 1.1;
  title.visible = false;
  
  box1 = createSprite(540 , 960, 100, 100);
  box1.visible = false;
  
  box2 = createSprite(540 , 960, 100, 100);
  box2.visible = false;
  
  // mi = createSprite(540 , 960, 100, 100);
  // mi.addImage("mi", miImg);
  // mi.y = 4000;
  // mi.scale = 2.5;

  mi = createButton("Mission");
  mi.position(width/2+200,height/2+200);
  mi.size(200,50)
  mi.addImage("mi", miImg);
  mi.style("font-size","30px");
  mi.style("background-color","#000000")
  mi.style("color","#ffffff");

  // my = createSprite(540 , 1360, 100, 100);
  // my.addImage("my", myImg);
  // my.y = 4000;
  // my.scale = 2.5;

  my = createButton("Mystery");
  my.position(width/2+200,height/2+400);
  my.size(200,50)
  my.style("font-size","30px");
  my.style("background-color","#000000")
  my.style("color","#ffffff");


  // ch = createSprite(540 , 1760, 100, 100);
  // ch.addImage("ch", chImg);
  // ch.y = 4000;
  // ch.scale = 2.5;

  ch = createButton("Chapters");
  ch.position(width/2+200,height/2+600);
  ch.size(200,50)
  ch.style("font-size","30px");
  ch.style("background-color","#000000")
  ch.style("color","#ffffff");


  sett = createSprite(970 , 1890, 100, 100);
  sett.addImage("sett", settImg);
  sett.y = 4000;
  sett.scale = 0.85;

  rate = createSprite(540 , 480, 100, 100);
  rate.addImage("rate", rateImg);
  rate.y = 4000;
  rate.scale = 2.5;

  fw = createSprite(540 , 960, 100, 100);
  fw.addImage("fw", fwImg);
  fw.y = 4000;
  fw.scale = 2.5;

  htp = createSprite(540 , 1440, 100, 100);
  htp.addImage("htp", htpImg);
  htp.y = 4000;
  htp.scale = 2.5;

  dt = createSprite(540 , 1920, 100, 100);
  dt.addImage("dt", dtImg);
  dt.y = 4000;
  dt.scale = 2.5;
  















}

function draw() {
  background(bg);

  if(gameState === "BRAND"){

    box1.velocityX = 4.5;

  }

  if(box1.x > 1080 && gameState === "BRAND"){

    gameState = "LOAD";
    loadScreen();

  }

  if(box2.x > 1080 && gameState === "LOAD"){

    gameState = "HOME";
    homeScreen();

  }

  if(mousePressedOver(sett)){

    gameState = "SETT";
    settScreen();

  }

  if(mousePressedOver(fw)){

    window.open("https://www.youtube.com/channel/UCujaU8f2xCEJAY9F_tEGbcg?", "_self");

  }

  
  


   console.log(gameState);
  
   drawSprites();
}

function loadScreen(){

  if(gameState === "LOAD"){

    box1.velocityX = 0;

    box2.velocityX = 3;

    brand.visible = false;

    main.visible = true;
    load.visible = true;
    title.visible = true;

  }

}

function homeScreen(){

  if(gameState === "HOME"){

    // mi.y = 1100;
    // my.y = 1350;
    // ch.y = 1600;

    mi.mousePressed(()=>{
      alert("To The Mission");
    });

    my.mousePressed(()=>{
      alert("Mysteries..");
    });

    ch.mousePressed(()=>{
      alert("Select Your Chapter");
    });

    sett.y = 1800;

    box1.velocityX = 0;

    box2.velocityX = 0;

    brand.visible = false;
    main.visible = false;
    load.visible = false;
    title.visible = false;

    greet.visible = true;

  }

}

function settScreen(){

  if(gameState === "SETT"){

    mi.y = 4000; 
    my.y = 4000;
    ch.y = 4000;
    sett.y = 4000;

    rate.y = 610;
    fw.y = 920;
    htp.y = 1230;
    dt.y = 1560;

    box1.velocityX = 0;

    box2.velocityX = 0;

    brand.visible = false;
    main.visible = false;
    load.visible = false;
    title.visible = false;
    greet.visible = false; 

  }

}




