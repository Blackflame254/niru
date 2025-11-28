// Uptime counter
let hours = 0;
setInterval(()=> {
    hours++; document.getElementById("uptime").textContent = hours+" hrs";
}, 3000);

// Alerts rotating feed
const alerts = [
    "Suspicious Movement Detected",
    "Unknown Person Entered Zone 2",
    "Attempted Entry at Gate 4",
    "Weapon-like Object Detected",
    "Loitering Detected Near Exit"
];

let alertIndex = 0, count=0;
function showAlert(){
    const ul = document.getElementById("alertFeed");
    const li = document.createElement("li");
    li.textContent = alerts[alertIndex];

    ul.prepend(li);
    alertIndex = (alertIndex+1)%alerts.length;
    document.getElementById("alertCount").textContent = ++count;
}
setInterval(showAlert, 4000);

// Popup (intruder event)
setTimeout(()=>{
    const pop=document.getElementById("alertPopup");
    pop.style.display="block";
    setTimeout(()=>pop.style.display="none",8000);
},6000);

// Page navigation
document.querySelectorAll(".tab-btn").forEach(btn=>{
    btn.onclick=()=>{
        document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
        document.getElementById(btn.dataset.target).classList.add("active");
    };
});

// Training button
document.getElementById("trainBtn").onclick=()=>{
    let t=0;
    const update=setInterval(()=>{
        document.getElementById("trainStatus").textContent="Training "+t+"%";
        t++; if(t>100){clearInterval(update); document.getElementById("trainStatus").textContent="Model Trained ✔";}
    },60);
};

// Fake history logs
const logs=[
    ["11:32","Cam#4","Intrusion","High"],
    ["12:04","Cam#2","Suspicious Activity","Medium"],
    ["14:18","Cam#1","Unauthorized Entry","High"],
    ["18:54","Cam#3","Loitering","Low"]
];
const tbody=document.getElementById("historyTable");
logs.forEach(r=>{
    const tr=document.createElement("tr");
    r.forEach(c=>{let td=document.createElement("td"); td.textContent=c; tr.appendChild(td);});
    tbody.appendChild(tr);
});
