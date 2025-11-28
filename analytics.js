/* === Crime Chart (Bar + Line overlay) === */
const crimeCanvas = document.getElementById("crimeChart");
const ctx = crimeCanvas.getContext("2d");

let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul"];
let kills = [3,5,7,14,18,23,30];

function drawCrimeGraph(){
    ctx.clearRect(0,0,crimeCanvas.width,crimeCanvas.height);

    let W = crimeCanvas.width;
    let H = crimeCanvas.height;

    // Axis
    ctx.strokeStyle="#0ff"; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(50,20); ctx.lineTo(50,H-40); ctx.lineTo(W-20,H-40); ctx.stroke();

    // Bars
    kills.forEach((val,i)=>{
        let x = 70 + i*70;
        let height = val*6;

        ctx.fillStyle="rgba(0,255,255,.4)";
        ctx.fillRect(x,H-40-height,40,height);

        // Labels
        ctx.fillStyle="#0ff";
        ctx.fillText(months[i],x+5,H-15);
    });

    // Line Graph Overlay
    ctx.beginPath(); ctx.strokeStyle="#ff0077"; ctx.lineWidth=2;
    kills.forEach((v,i)=>{
        let x=90+i*70, y=H-40-(v*6);
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    });
    ctx.stroke();
}
drawCrimeGraph();


/* === Training Circular Progress === */
let percent=0;
function updateCircle(){
    percent++;
    if(percent>100) percent=100;

    const circle=document.getElementById("circle");
    const txt=document.getElementById("circleText");

    circle.style.background=`conic-gradient(#00ffea ${percent*3.6}deg,#00363a 0deg)`;
    txt.textContent=percent+"%";
}
let circleInterval=setInterval(updateCircle,80);


/* === Training Growth Line Chart === */
const trainCanvas = document.getElementById("trainChart");
const tctx = trainCanvas.getContext("2d");

let accuracy=[10,18,28,41,55,70,83,91,96];
let epochs=[1,2,3,4,5,6,7,8,9];

function drawTrainGraph(){
    let W=trainCanvas.width, H=trainCanvas.height;

    tctx.clearRect(0,0,W,H);
    tctx.strokeStyle="#0ff"; tctx.lineWidth=2;

    // Axis
    tctx.beginPath();
    tctx.moveTo(40,10);tctx.lineTo(40,H-30);tctx.lineTo(W-20,H-30);
    tctx.stroke();

    // Growth Line
    tctx.beginPath();tctx.strokeStyle="#ff008c";tctx.lineWidth=3;
    accuracy.forEach((v,i)=>{
        let x=60+i*40, y=H-30-(v*2.2);
        i===0?tctx.moveTo(x,y):tctx.lineTo(x,y);
    });
    tctx.stroke();
}
drawTrainGraph();
