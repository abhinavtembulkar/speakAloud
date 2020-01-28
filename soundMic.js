var mic

function setup(){
    createCanvas(550,550)
    background(0)
    
    mic = new p5.AudioIn()
    mic.start()

}

function draw(){
    background(0)

    fill(255)
    textSize(30)
    text("SPEAK ALOUD!",100,100)
    text(mic.getLevel(),100,200)

    fill(255)
    ellipse(270,300,width,1000*mic.getLevel())
}