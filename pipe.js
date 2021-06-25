const topPipe = new Image();
topPipe.src = './imgs/toppipe.png';

const bottomPipe = new Image();
bottomPipe.src = './imgs/botpipe.png';

const pipe = {
  top: { img: topPipe },
  bot: { img: bottomPipe },
  gap: 130,
  pipes: [],
  draw: () => {
    for (let i = 0; i < pipe.pipes.length; i++) {
      let p = pipe.pipes[i];
      context.drawImage(pipe.top.img, p.x, p.y);
      context.drawImage(
        pipe.bot.img,
        p.x,
        p.y + parseFloat(pipe.top.img.height) + pipe.gap
      );
    }
  },
  update: () => {
    if (counter % 100 == 0) {
      pipe.pipes.push({
        x: parseFloat(frame.width),
        y: -190 * Math.min(Math.random() + 1, 1.8),
      });
    }

    pipe.pipes.forEach(pipe => {
      pipe.x -= 2;
    });

    if (pipe.pipes.length && pipe.pipes[0].x < -pipe.top.img.width) {
      pipe.pipes.shift();
    }
  },
  detectCollision: () => {
    for (let i = 0; i < pipe.pipes.length; i++) {
      if (
        bird.x < pipe.pipes[i].x + pipe.top.img.width &&
        bird.x + bird.width > pipe.pipes[i].x &&
        ((bird.y < pipe.pipes[i].y + pipe.top.img.height + bird.height / 8 &&
          bird.y + bird.height > 0) ||
          (bird.y >
            pipe.pipes[i].y + pipe.top.img.height + pipe.gap - bird.height &&
            bird.y + bird.height < frame.height))
      ) {
        gameIsOn = false;
      } else if (pipe.pipes[i].x === bird.x) {
        score_audio.play();
        scr++;
      }
    }
  },
};
