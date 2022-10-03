const c = document.getElementById("Canvas");
const ctx = c.getContext("2d");
const speed = 0.05;
const FPS = 30;
let pause = false;

let interval = setInterval(() => {
  ctx.clearRect(0, 0, c.width, c.height);
  drawCircles();
  drawLines();
}, 1000 / FPS);

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    if (pause) {
      interval = setInterval(() => {
        ctx.clearRect(0, 0, c.width, c.height);
        drawCircles();
        drawLines();
      }, 1000 / FPS);
      pause = false;
    } else {
      clearInterval(interval);
      pause = true;
    }
  }
});

const circlesArray = [
  {
    color: "#00008b",
    length: 175,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0175,
  },
  {
    color: "#0000d8",
    length: 200,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.018,
  },
  {
    color: "#4040ff",
    length: 225,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0185,
  },
  {
    color: "#14716c",
    length: 250,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.019,
  },
  {
    color: "#20b2aa",
    length: 275,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0195,
  },
  {
    color: "#42ddd4",
    length: 300,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.02,
  },
  {
    color: "#20b261",
    length: 325,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0205,
  },
  {
    color: "#00b300",
    length: 350,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.021,
  },
  {
    color: "#9acd32",
    length: 375,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0215,
  },
  {
    color: "#ddd542",
    length: 400,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.022,
  },
  {
    color: "#ffff00",
    length: 425,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0225,
  },
  {
    color: "#ffae42",
    length: 450,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.023,
  },
  {
    color: "#f58c00",
    length: 475,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0235,
  },
  {
    color: "#ff4500",
    length: 500,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.024,
  },
  {
    color: "#b33000",
    length: 525,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
    angleV: 0,
    angleA: 0,
    gravity: 0.0245,
  },
  {
    color: "#671b00",
    length: 550,
    posX: 500,
    posY: 500,
    direction: 1,
    angle: Math.PI / 4,
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
      circlesArray[i].length * Math.sin(circlesArray[i].angle) + 500;
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
