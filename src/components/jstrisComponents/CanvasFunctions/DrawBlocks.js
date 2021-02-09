import DrawBlock from "./DrawBlock";

const DrawBlocks = () => {
  const gamecanvas = document.getElementById("myCanvas");
  const gamectx = gamecanvas.getContext("2d");

  var tex = new Image();
  tex.onload = function () {
    createTKI();
    addGarbage();
  };
  tex.src = "https://i.imgur.com/J5LG3O8.png";

  function createTKI() {
    // Draw L
    DrawBlock(gamectx, 0, 11, 3, false, tex);
    DrawBlock(gamectx, 0, 12, 3, false, tex);
    DrawBlock(gamectx, 0, 13, 3, false, tex);
    DrawBlock(gamectx, 1, 13, 3, false, tex);
    // Draw T
    DrawBlock(gamectx, 1, 3, 8, false, tex);
    DrawBlock(gamectx, 2, 2, 8, false, tex);
    DrawBlock(gamectx, 2, 3, 8, false, tex);
    DrawBlock(gamectx, 2, 4, 8, false, tex);
    // Draw I
    DrawBlock(gamectx, 3, 13, 6, false, tex);
    DrawBlock(gamectx, 4, 13, 6, false, tex);
    DrawBlock(gamectx, 5, 13, 6, false, tex);
    DrawBlock(gamectx, 6, 13, 6, false, tex);
    // Draw Z
    DrawBlock(gamectx, 3, 11, 2, false, tex);
    DrawBlock(gamectx, 4, 11, 2, false, tex);
    DrawBlock(gamectx, 4, 12, 2, false, tex);
    DrawBlock(gamectx, 5, 12, 2, false, tex);
    // Draw J
    DrawBlock(gamectx, 3, 10, 7, false, tex);
    DrawBlock(gamectx, 4, 10, 7, false, tex);
    DrawBlock(gamectx, 5, 10, 7, false, tex);
    DrawBlock(gamectx, 5, 11, 7, false, tex);
    // Draw S
    DrawBlock(gamectx, 6, 11, 5, false, tex);
    DrawBlock(gamectx, 6, 12, 5, false, tex);
    DrawBlock(gamectx, 7, 12, 5, false, tex);
    DrawBlock(gamectx, 7, 13, 5, false, tex);
    // Draw O
    DrawBlock(gamectx, 8, 12, 4, false, tex);
    DrawBlock(gamectx, 9, 12, 4, false, tex);
    DrawBlock(gamectx, 8, 13, 4, false, tex);
    DrawBlock(gamectx, 9, 13, 4, false, tex);
  }

  function addGarbage() {
    let random = Math.floor(Math.random() * 100 + 1);
    function getHole() {
      return Math.floor(Math.random() * 10);
    }
    // Draw Solid garbage
    for (let i = 0; i < 10; i++) {
      DrawBlock(gamectx, i, 18, 0, false, tex);
      DrawBlock(gamectx, i, 19, 0, false, tex);
    }
    if (random <= 70) {
      let gHole = getHole();
      for (let i = 0; i < 10; i++) {
        console.log(i,gHole)
        if (i === gHole) continue;
        DrawBlock(gamectx, i, 14, 1, false, tex);
        DrawBlock(gamectx, i, 15, 1, false, tex);
        DrawBlock(gamectx, i, 16, 1, false, tex);
        DrawBlock(gamectx, i, 17, 1, false, tex);
      }
    } else if (random > 70 && random <= 95) {
      for (let k = 0; k < 4; k++) {
        let gHole = getHole();
        for (let i = 0; i < 10; i++) {
          if (i === gHole) continue;
          DrawBlock(gamectx, i, 14 + k, 1, false, tex);
        }
      }
    } else if (random > 95) {
      for (let i = 0; i < 10; i++) {
        if (i !== 0) DrawBlock(gamectx, i, 14, 1, false, tex);
        if (i !== 1) DrawBlock(gamectx, i, 15, 1, false, tex);
        if (i !== 2) DrawBlock(gamectx, i, 16, 1, false, tex);
        if (i !== 3) DrawBlock(gamectx, i, 17, 1, false, tex);
      }
    }
    // Draw garbage
  }

  var ghostTex = new Image();
  ghostTex.onload = function () {
    // Draw Ghost T
    DrawBlock(gamectx, 1, 12, 8, true, tex);
    DrawBlock(gamectx, 2, 11, 8, true, tex);
    DrawBlock(gamectx, 2, 12, 8, true, tex);
    DrawBlock(gamectx, 2, 13, 8, true, tex);
  };
  ghostTex.src = "https://i.imgur.com/2cXLnkR.png";

  function drawRectangle(blockX, blockY, sizeX, sizeY, color) {
    gamectx.beginPath();
    gamectx.rect(blockX, blockY, sizeX, sizeY);
    gamectx.fillStyle = color;
    gamectx.fill();
  }
};

export default DrawBlocks;
