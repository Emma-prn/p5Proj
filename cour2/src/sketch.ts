// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 30,
    Random: 20,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 1000, 1)
gui.add(params, "Random", 0, 1000, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random)
    background('white')
    rectMode(CENTER)
    noStroke()
    for (let i = 0; i < params.N; i++){
        fill(random([
            color(245, 179, 66), 
            color(224, 18, 18),
            color(17, 20, 209),
            color(0, 0, 0)
        ]))
        let widthRec = random(20,100)
        let heightRec = random(5,35)
        push()
        translate(random(width),random(height));
        rect(0,0,widthRec,heightRec)
        pop()
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}