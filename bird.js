const bird1 = new Image();
const bird2 = new Image();
const bird3 = new Image();

bird1.src = "./imgs/bird/b0.png";
bird2.src = "./imgs/bird/b1.png";
bird3.src = "./imgs/bird/b2.png";

const bird = {
  x: 120,
  y: 200,
  vy: 0,
  imgs: [bird1, bird2, bird3],
  width: 34,
  height: 26,
  weight: 1,
  update: () => {
    if (bird.y > frame.height - ground.height - bird.height*1.2) {
      gameIsOn = false;
    } else {
      bird.vy += bird.weight;
      bird.vy *= 0.8;
      bird.y += bird.vy;
    }

    if (bird.y < 0 + bird.height/2){
      gameIsOn = false; 
    }

    if (pressed) bird.flap();
  },
  draw: () => {
    context.drawImage(bird.imgs[counter < 10 ? 1 : parseInt(counter / 10) % 3], bird.x, bird.y);
  },
  flap: () => {
    bird.vy -= 3;
  },
};
