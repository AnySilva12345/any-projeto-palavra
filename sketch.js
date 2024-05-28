function setup() {
    createCanvas(400, 400);
    
    
    
  }
  
  function draw() {
    background("white");
    textSize(64)
    fill("black")
     textAlign(CENTER,CENTER)
    
    let maximo= width;
    let minimo= 0;
    let palavra= "Respeito";
    let quantidade= map (mouseX,0,width,1,palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
    
    
   // if (mouseX<50){
     // let palavra="R";
    // text(palavra,200,200);
      
   /