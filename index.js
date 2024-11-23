// Start on 23-11-2024

console.log("START ... ");

// Global variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const pointDiameter = 3;
const triangleSide = 360;
const triangleHeihjt = (triangleSide * Math.sqrt(3)) / 2;

let vertex = [
  { x: 20, y: 380 },
  { x: 380, y: 380 },
  { x: 200, y: (400 - 20 - triangleHeihjt) }
];


function drawPoint(ctx, p, d = pointDiameter/2) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, d, 0, 2 * Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#003300';
  ctx.stroke();
}

function drawTriangle(ctx, vertex) {
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.lineWidth = 1;
  ctx.moveTo(vertex[0].x, vertex[0].y);
  for (let n = 1; n <= vertex.length; n++) {
    ctx.lineTo(vertex[n % vertex.length].x, vertex[n % vertex.length].y);
  }
  ctx.stroke();
}

function drawPoints( ctx, points) {
  for(let p of points) {
    drawPoint(ctx, p);
  }
}

function drawAll() {
  drawPoints(ctx, vertex);
  drawTriangle(ctx, vertex);
  requestAnimationFrame(drawAll);
}

requestAnimationFrame(drawAll);



