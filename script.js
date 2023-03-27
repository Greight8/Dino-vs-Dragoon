console.log("welcome to Dragon Game");

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  location.reload();
});

let score = 0;
let cross = true;

audio = new Audio("music.mp3");
audioOver = new Audio("gameover.mp3");

// setTimeout(() => {
//   audio.play();
// }, 1000);

document.onkeydown = function (e) {
  // console.log("Key code is", e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  } else if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  } else if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  // dino ki x value ie left value
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  // console.log("value of dx is ", dx);

  // dino ki y value ie top value
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  // console.log("value of dy is ", dy);

  // Obstacle ki x value ie left value
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  // console.log("value of ox is ", ox);

  // Obstacle ki y value ie top value
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );
  // console.log("value of oy is ", oy);

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log("difference of left is ", offsetX);
  // console.log("difference of top is ", offsetY);

  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove("obstacleAni");

    // audioOver.play();
    // audio.pause();
    // audioOver.pause;

    // setTimeout(() => {
    //   audioOver.pause();
    // }, 100);

  } else if (offsetX < 100 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      dragonSpeed = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      // console.log(dragonSpeed);
      newSpeed = dragonSpeed - 0.2;
      if (newSpeed >= 3.2) {
        obstacle.style.animationDuration = newSpeed + "s";
        // console.log("New animation duration: ", newSpeed);
      } else {
        return fixSpeed(newSpeed);
      }
    }, 1000);
  }
}, 10);

function updateScore(score) {
  scoreCount.innerHTML = "Score : " + score;
}

function fixSpeed(newSpeed) {
  newSpeed = 2.6;
  obstacle.style.animationDuration = newSpeed + "s";
  // console.log("New animation duration: ", newSpeed);
}
