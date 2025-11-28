const grid = document.getElementById("camGrid");

const cameras = [
    "Gate Entrance",
    "Parking Lot",
    "Hallway 1",
    "Main Office",
    "Server Room",
    "Back Door",
    "Rooftop",
    "Lobby Cam"
];

function createCams(){
    cameras.forEach(name=>{
        const cam = document.createElement("div");
        cam.className="cam";

        cam.innerHTML = `
            <div class="status"></div>
            <div class="tag">${name}</div>
            <div class="feed-sim"></div>
        `;
        grid.append(cam);

        cam.onclick = ()=> cam.classList.toggle("full");
    });
}

createCams();

/* Random camera offline/online simulation */
setInterval(()=>{
    const cams = document.querySelectorAll(".cam");
    const pick = cams[Math.floor(Math.random()*cams.length)];
    pick.classList.toggle("offline");
}, 4000);

/* Static flicker effect */
setInterval(()=>{
    document.querySelectorAll(".feed-sim").forEach(el=>{
        el.style.opacity=Math.random()>.1?1:0.4;
    });
},150);
