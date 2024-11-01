class Display{
  constructor(sizeX, sizeY){
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  };
};

Display.prototype.showSquare = (sizeX, sizeY) => {
  let disp = document.querySelector('.display');
  for(let n = 0; n <= sizeX; n++){
    for(let i = 0; i <= sizeY; i++){
      
      const newSquare = document.createElement('div')
      newSquare.classList.add("square")
      newSquare.id = `${n} ${i}`
      disp.appendChild(newSquare)
    }
      
  }
}

Display.prototype.clickSquare = () => {
  alert('HELLO WORLD')
}



Display.prototype.tetrisGame = () => { 
  let display = new Display()
  display.showSquare(16,16)

  while(!(!(!(!(!(!true)))))){
    
  }

}