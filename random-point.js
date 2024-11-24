console.log("RANDOM");

const xRange = {min: 0, max: 0};

function defineXRange (vertex, xRange) {
  xRange.min = vertex[0].x;
  for (let p of vertex) {
    if (p.x < xRange.min) {
      xRange.min = p.x ;
    }
  }
  xRange.max = vertex[0].x;
  for (let p of vertex) {
    if (p.x > xRange.max) {
      xRange.max = p.x ;
    }
  }
}

function randomPoint(vertex, xRange) {
  defineXRange(vertex, xRange);
  const segment = xRange.max - xRange.min;
  let delta = 0;
  xDist = Math.random() * segment;
  if (xDist > ((xRange.max - xRange.min) / 2)) {
    delta =  2 * (xDist - (xRange.max - xRange.min) / 2 );
  }
  yDist = (Math.tan(Math.PI/3) * (xDist - delta)) * Math.random() ;
  let p = { x: 0, y: 0 };
  p.x = vertex[0].x + xDist;
  p.y = vertex[0].y - yDist;
  //console.log(p);
  return p;
}

//drawPoint(ctx, randomPoint(vertex, xRange))
//for (let i=0; i< 1000; i++) {drawPoint(ctx, randomPoint(vertex, xRange))}

function drawFra(ctx, vertex) {
  let p = randomPoint(vertex, xRange);
  let v = vertex[Math.floor(vertex.length * Math.random())];
  
  for (let n=0; n<500; n++) {
    p = newP(p, v);
    console.log(p);
    drawPoint(ctx, p);
    v = vertex[Math.floor(vertex.length * Math.random())];
    console.log(v);
  }
  
}

function newP(p, v) {
  pp = { x:0, y:0 };
  pp.x = p.x + (v.x - p.x) * 0.5;
  pp.y = p.y + (v.y - p.y) *0.5;
  return pp;
}

const btn = document.getElementById("btn1");
btn.addEventListener("click", (e) => {
  drawFra(ctx, vertex);
});

const btnC = document.getElementById("btnClean");
btnC.addEventListener("click", (e) => {
  ctx.clearRect(0,0,canvas.width, canvas.height);
});
