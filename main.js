function setup(){
 video = createCapture(VIDEO);
 Canvas = createCanvas(640,480);
 background("red")
 pose = ml5.poseNet(video, listo)
 pose.on("pose", respuesta);
}
function listo(){
    console.log("ya esta listo")
}
function respuesta (resultados){
    if (resultados[0]) {
    console.log(resultados) 
    narizX = resultados[0].pose.nose.x;
    narizY = resultados[0].pose.nose.y;
    manoIzq = resultados[0].pose.leftWrist.x;
    manoDer = resultados[0].pose.rightWrist.x
    distancia = manoIzq - manoDer;
    }
}
function draw() {
    background("red")
    var mitad = distancia/2
    textSize(distancia)
    text("aviso",narizX-mitad,narizY-mitad)
    
}
var narizX = 0
var narizY = 0
var distancia = 0