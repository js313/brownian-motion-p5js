let x1 = 600 / 2, y1 = 600 / 2, x2 = x1, y2 = y1;
let history = []

function setup() {
    createCanvas(600, 600)
    let v = createVector(x1, x2)
    history.push(v)
    background(0)
}

function draw() {
    background(0)
    x1 = x2
    y1 = y2
    x2 += random(-5, 5)
    y2 += random(-5, 5)
    let v = createVector(x2, y2)
    history.push(v)
    for (let i = 1; i < history.length; i++) {
        stroke(255 - history.length / 2 + i)
        line(history[i - 1].x, history[i - 1].y, history[i].x, history[i].y)
    }
}