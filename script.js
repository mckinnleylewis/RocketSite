document.getElementById("launchButton").addEventListener("click", function() {
    document.getElementById("statusText").innerText = "Rocket Launched!";
});

document.getElementById("stopButton").addEventListener("click", function() {
    document.getElementById("statusText").innerText = "Launch Stopped.";
});

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("statusText").innerText = "Ready to launch!";
});
