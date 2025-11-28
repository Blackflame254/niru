const targets = document.getElementById("targets");
const scoreEl = document.getElementById("riskScore");
const levelEl = document.getElementById("alertLevel");
const countEl = document.getElementById("entityCount");

let risk = 0, count=0;

function addTarget() {
    const riskLevel = ["low","medium","high"][Math.floor(Math.random()*3)];
    const msg = {
        low:"Suspicious movement detected in a forbiden area",
        medium:"Unknown person in the server room",
        high:"Possible armed threat detected! not in security database"
    }[riskLevel];

    // UI element
    const div = document.createElement("div");
    div.className = `target ${riskLevel}`;
    div.innerHTML = `
        ${msg}
        <span>${new Date().toLocaleTimeString()}</span>
    `;

    targets.prepend(div);

    // update threat analytics
    count++;
    risk += riskLevel==="high" ? 15 : riskLevel==="medium" ? 8 : 2;
    updateStats();
}

function updateStats(){
    if(risk>100) risk=100;

    countEl.textContent = `Entities Tracked: ${count}`;
    scoreEl.textContent = `Risk Score: ${risk}%`;

    if(risk<30)      levelEl.textContent="Level: SAFE";
    else if(risk<60) levelEl.textContent="Level: WARNING";
    else            levelEl.textContent="Level: CRITICAL";
}

// ⏳ simulate live detection feed
setInterval(addTarget, 2500);
