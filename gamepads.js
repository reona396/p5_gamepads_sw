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
  createCanvas(400,650);
}


function draw() {
  background(200);

  fill(0);
  for(let p = 0; p < buttonNum; p++) {
    const name = buttonMapping[p]buttonNum;
      text(name, 80, 20 * p);
  }

  // let gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  // let gamepadArray = [];
  // for(let i = 0; i < gamepads.length; i++) {
  //   gamepadArray.push(gamepads[i]);
  // }
  // let orderedGamepads = [];
  // orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (R)') > -1));
  // orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (L)') > -1));
  // let pressed = [];
  //
  //   for (let g = 0; g < orderedGamepads.length; g++) {
  //       const gp = orderedGamepads[g];
  //       if (!!gp) {
  //
  //           for(let i = 0; i < gp.buttons.length; i++) {
  //               if(gp.buttons[i].pressed) {
  //                   const id = (g * 15) + i + g;
  //                   const button = buttonMapping[id] || id;
  //                   // pressed.push(button);
  //                   text(button, width/2,height/2);
  //               }
  //
  //           }
  //
  //
  //       }
  //   }

}
