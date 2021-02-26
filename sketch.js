var bg;
var brand, brandImg, box1;
var box2, main, load, title, mainImg, loadImg, titleImg;
var greet, greetImg, bgm, mi, my, ch, miImg, myImg, chImg, sett, settImg;
var rate, rateImg, back1, back1Img, dt, dtImg, fw, fwImg, htp, htpImg;

var gameState = "BRAND";

function preload(){

  bg = loadImage("bg.jpeg");
  brandImg = loadImage("brand.png");
  mainImg = loadImage("main.jpg");
  loadImg = loadImage("load.png");
  titleImg = loadImage("title.jpg");
  greetImg = loadImage("greet.jpg");
  miImg = loadImage("mi.png");
  myImg = loadImage("my.png");
  chImg = loadImage("ch.png");
  settImg = loadImage("sett.png");
  rateImg = loadImage("rate.png");
  htpImg = loadImage("htp.png");
  dtImg = loadImage("dt.png");
  fwImg = loadImage("fw.png");
  back1Img = loadImage("back.png");

}

function setup() {
  createCanvas(1080, 1920);
  
  brand = createSprite(535 , 955, 100, 100);
  brand.addImage("brand", brandImg);
  brand.scale = 2.5;

  main = createSprite(540 , 940, 100, 100);
  main.addImage("main", mainImg);
  main.scale = 3;
  main.visible = false;

  greet = createSprite(540 , 350, 100, 100);
  greet.addImage("greet", greetImg);
  greet.scale = 1;
  greet.visible = false;

  load = createSprite(540 , 1500, 100, 100);
  load.addImage("load", loadImg);
  load.scale = 2;
  load.visible = false;

  title = createSprite(560 , 150, 100, 100);
  title.addImage("title", titleImg);
  title.scale = 1.1;
  title.visible = false;
  
  box1 = createSprite(540 , 960, 100, 100);
  box1.visible = false;
  
  box2 = createSprite(540 , 960, 100, 100);
  box2.visible = false;
  
  mi = createSprite(540 , 960, 100, 100);
  mi.addImage("mi", miImg);
  mi.y = 4000;
  mi.scale = 2.5;

  my = createSprite(540 , 1360, 100, 100);
  my.addImage("my", myImg);
  my.y = 4000;
  my.scale = 2.5;

  ch = createSprite(540 , 1760, 100, 100);
  ch.addImage("ch", chImg);
  ch.y = 4000;
  ch.scale = 2.5;

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

  if(mouseClicked(sett)){

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

    mi.y = 1100;
    my.y = 1350;
    ch.y = 1600;
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
