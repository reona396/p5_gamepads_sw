const buttonNum = 31;

const buttonMapping = {
    0: 'A',
    1: 'X',
    2: 'B',
    3: 'Y',
    4: 'RSL',
    5: 'RSR',
    9: 'PLUS',
    11: 'RA',
    12: 'HOME',
    14: 'R',
    15: 'RT',
    16: 'LEFT',
    17: 'DOWN',
    18: 'UP',
    19: 'RIGHT',
    20: 'LSL',
    21: 'LSR',
    24: 'MINUS',
    26: 'LA',
    29: 'CAPTURE',
    30: 'L',
    31: 'LT'
}

function setup() {
  createCanvas(400,670);
  textAlign(LEFT,CENTER);
}


function draw() {
  background(200);

  let buttonCount = 0;
  for(let p = 0; p <= buttonNum; p++) {
    const name = buttonMapping[p] || p;
    if(isNaN(name)){
      fill(0);
      text(name, 100, 25 * buttonCount + 30);
      noFill();
      ellipse(85, 25 * buttonCount + 30, 13, 13);
      buttonCount++;
    }
  }

  let gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  let gamepadArray = [];
  for(let i = 0; i < gamepads.length; i++) {
    gamepadArray.push(gamepads[i]);
  }
  let orderedGamepads = [];
  orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (R)') > -1));
  orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (L)') > -1));
  let pressed = [];

    for (let g = 0; g < orderedGamepads.length; g++) {
        const gp = orderedGamepads[g];
        if (!!gp) {
            const axes = gp.axes;

            // スティックの位置をマッピング
            fill(0);
            // 方向入れる
            if(axes[axes.length-1] <= 1){
              let axesVal = 0;
              if(g == 0){
                axesVal = map(axes[axes.length-1], -1, 1, 0, 7);
                console.log(axesVal);
              }
              else {
                axesVal = map(axes[axes.length-1], -1, 1, 0, 7);
              }
              let axesTheta = axesVal * 360 / 8;
              ellipse(30 * cos(radians(axesTheta))+ g * 100 + 100 , 30 * sin(radians(axesTheta))+ 100, 20, 20);
            }
            // ニュートラル位置
            else {
              ellipse(g * 100 + 100, 100, 20, 20);
            }



            for(let i = 0; i < gp.buttons.length; i++) {

                if(gp.buttons[i].pressed) {
                    const pressedId = (g * 15) + i + g;
                    const pressedIndex = getIndex(pressedId);;
                    // const button = buttonMapping[id] || id;
                    // pressed.push(button);

                    fill(200, 0, 0);
                    ellipse(85, 25 * pressedIndex + 30, 13, 13);
                }
            }
        }
    }


}

function getIndex(id) {
  var resultIndex = 0
  for(let i = 0; i < id; i++) {
    const name = buttonMapping[i] || i;
    if(isNaN(name)){
      resultIndex++;
    }
  }

  return resultIndex;
}
