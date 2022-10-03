const c = document.getElementById("Canvas");
const ctx = c.getContext("2d");
ctx.canvas.width = screen.width;
ctx.canvas.height = screen.height * 0.7;
const speed = 0.05;
const FPS = 30;
let pause = false;
let lineStyle = 1;
let button = document.getElementsByClassName("button");

let interval = setInterval(() => {
  ctx.clearRect(0, 0, c.width, c.height);
  drawLines();
  drawCircles();
}, 1000 / FPS);

document.getElementById("Canvas").addEventListener("click", () => {
  if (pause) {
    interval = setInterval(() => {
      ctx.clearRect(0, 0, c.width, c.height);
      drawCircles();
      if (lineStyle == 1) {
        drawLines();
      } else if (lineStyle == 2) {
        drawHangingLines();
      }
    }, 1000 / FPS);
    pause = false;
  } else {
    clearInterval(interval);
    pause = true;
  }
});

document.getElementById("offButton").addEventListener("click", () => {
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("selected");
  }
  button[0].classList.add("selected");
  lineStyle = 0;

  clearInterval(interval);
  interval = setInterval(() => {
    ctx.clearRect(0, 0, c.width, c.height);
    drawCircles();
    if (lineStyle == 1) {
      drawLines();
    } else if (lineStyle == 2) {
      drawHangingLines();
    }
  }, 1000 / FPS);
});

document.getElementById("connectedButton").addEventListener("click", () => {
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("selected");
  }
  button[1].classList.add("selected");
  lineStyle = 1;

  clearInterval(interval);
  interval = setInterval(() => {
    ctx.clearRect(0, 0, c.width, c.height);
    if (lineStyle == 1) {
      drawLines();
    } else if (lineStyle == 2) {
      drawHangingLines();
    }

    drawCircles();
  }, 1000 / FPS);
});

document.getElementById("hangingButton").addEventListener("click", () => {
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("selected");
  }
  button[2].classList.add("selected");
  lineStyle = 2;

  clearInterval(interval);
  interval = setInterval(() => {
    ctx.clearRect(0, 0, c.width, c.height);
    if (lineStyle == 1) {
      drawLines();
    } else if (lineStyle == 2) {
      drawHangingLines();
    }

    drawCircles();
  }, 1000 / FPS);
});

const circlesArray = [
  {
    color: "#00008b",
    length: screen.height * 0.1,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0175,
  },
  {
    color: "#0000d8",
    length: screen.height * 0.13,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.018,
  },
  {
    color: "#4040ff",
    length: screen.height * 0.16,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0185,
  },
  {
    color: "#14716c",
    length: screen.height * 0.19,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.019,
  },
  {
    color: "#20b2aa",
    length: screen.height * 0.22,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0195,
  },
  {
    color: "#42ddd4",
    length: screen.height * 0.25,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.02,
  },
  {
    color: "#20b261",
    length: screen.height * 0.28,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0205,
  },
  {
    color: "#00b300",
    length: screen.height * 0.31,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.021,
  },
  {
    color: "#9acd32",
    length: screen.height * 0.34,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0215,
  },
  {
    color: "#ddd542",
    length: screen.height * 0.37,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.022,
  },
  {
    color: "#ffff00",
    length: screen.height * 0.4,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0225,
  },
  {
    color: "#ffae42",
    length: screen.height * 0.43,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.023,
  },
  {
    color: "#f58c00",
    length: screen.height * 0.46,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0235,
  },
  {
    color: "#ff4500",
    length: screen.height * 0.49,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.024,
  },
  {
    color: "#b33000",
    length: screen.height * 0.52,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.0245,
  },
  {
    color: "#671b00",
    length: screen.height * 0.55,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 15,
    angleV: 0,
    angleA: 0,
    gravity: 0.025,
  },
];

function drawCircles() {
  for (let i in circlesArray) {
    ctx.beginPath();
    ctx.arc(circlesArray[i].posX, circlesArray[i].posY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = circlesArray[i].color;
    ctx.fill();
    let force = circlesArray[i].gravity * Math.sin(circlesArray[i].angle);
    circlesArray[i].angleA = -1 * force;
    circlesArray[i].angleV += circlesArray[i].angleA;
    circlesArray[i].angle += circlesArray[i].angleV;
    circlesArray[i].posX =
      circlesArray[i].length * Math.sin(circlesArray[i].angle) +
      window.innerWidth / 2;
    circlesArray[i].posY =
      circlesArray[i].length * Math.cos(circlesArray[i].angle);
    circlesArray[i].angle += speed;
  }
}
function drawLines() {
  for (let i = 0; i < circlesArray.length - 1; i++) {
    ctx.strokeStyle = "lightgrey";
    ctx.beginPath();
    ctx.moveTo(circlesArray[i].posX, circlesArray[i].posY);
    ctx.lineTo(circlesArray[i + 1].posX, circlesArray[i + 1].posY);
    ctx.stroke();
  }
}

function drawHangingLines() {
  for (let i in circlesArray) {
    ctx.strokeStyle = "lightgrey";
    ctx.beginPath();
    ctx.moveTo(circlesArray[i].posX, circlesArray[i].posY);
    ctx.lineTo(window.innerWidth / 2, 0);
    ctx.stroke();
  }
}
