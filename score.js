const score_audio = new Audio();
score_audio.src = "./audio/score.wav";

const score = {
    x: frame.width / 2 + bird.width / 2,
    y: frame.height / 2,
    draw: () => {
        context.fillStyle = 'white';
        context.font = '40px Odibee Sans';
        context.fillText(scr, score.x, score.y);
    }
}

const best_score = {
  x: bird.width / 2,
  y: 3.1*frame.height,
  draw: () => {
    context.fillStyle = 'black';
    context.font = '25px Odibee Sans';
    context.fillText(`Best score: ${best}`, best_score.x, best_score.y);
  },
};

const gameover = new Image();
gameover.src = "./imgs/go.png"


const game_over = {
    x: (frame.width - 188) / 2 + bird.width,
    y: frame.height,
    draw: () => {
        context.drawImage(gameover, game_over.x, game_over.y);
    },
    update: () => {
        if (!gameIsOn){
            game_over.draw();
        }
    }
}


