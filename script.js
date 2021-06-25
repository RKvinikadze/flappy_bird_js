let frame = document.getElementById('frame');
let context = frame.getContext('2d');

frame.width = 360;
frame.height = 500;

let pressed = false;
let counter = 0;
let scr = 0;
let best = 0;
let gameIsOn = true;

const background = new Image();
background.src = './imgs/background-day.png';

const BG = {
  x1: 0,
  y: -60,
  width: frame.width,
  height: frame.height,
  draw: () => {
    context.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
  },
};

const ground = new Image();
ground.src = "./imgs/ground.png";

const GRND = {
  x: 0,
  y: frame.height - 112,
  width: frame.width,
  height: 112,
  draw: () => {
    context.drawImage(ground, GRND.x, GRND.y, GRND.width, GRND.height);
  }
}

const animate = () => {
  context.clearRect(0, 0, frame.width, frame.height);
  counter++;
  BG.draw();
  bird.update();
  bird.draw();
  pipe.update();
  pipe.draw();
  pipe.detectCollision();
  GRND.draw();
  score.draw();
  best_score.draw();
  game_over.update();
  if (gameIsOn){
    requestAnimationFrame(animate);
  }
};

animate();

window.addEventListener('keypress', e => {
  if (e.code === 'Space' && !gameIsOn){
    reload(); 
  }

  if (e.code === 'Space') {
    pressed = true;
  }
});

window.addEventListener('keyup', e => {
  if (e.code === 'Space') {
    pressed = false;
  }
});


const reload = () => {
  best = Math.max(best, scr);
  scr = 0;
  counter = 0;
  bird.x = 120;
  bird.y = 200;
  pipe.pipes = [];
  gameIsOn = true;
  animate();
}

