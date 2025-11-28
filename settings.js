const accSlider = document.getElementById("accuracySlider");
const accVal = document.getElementById("accVal");

// Display slider value live
accSlider.oninput = () => accVal.textContent = accSlider.value + "%";

// Save settings
function saveSettings(){
    alert("Settings Saved ✔");
}

// Theme application
function applyTheme(){
    const theme = document.getElementById("themeSelector").value;

    if(theme === "matrix"){
        document.body.style.background = "black";
        document.body.style.color = "#00ff41";
    } else if(theme === "glass"){
        document.body.style.background = "rgba(255,255,255,0.07)";
        document.body.style.backdropFilter = "blur(20px)";
    } else{
        location.reload(); // reset to default
    }
}

// Danger zone
function clearLogs(){
    alert("All security logs wiped ⚠");
}
function exportLogs(){
    alert("Exported as CSV 📂");
}
