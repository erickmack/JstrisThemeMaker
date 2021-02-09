import DrawBlock from "./DrawBlock";

function DrawQandHold() {
  const holdcanvas = document.getElementById("holdCanvas");
  const hctx = holdcanvas.getContext("2d");

  const queuecanvas = document.getElementById("queueCanvas");
  const qctx = queuecanvas.getContext("2d");

  var tex = new Image();
  tex.onload = function () {
    drawPiece(hctx, "S", 0);

    drawPiece(qctx, "O", 0);
    drawPiece(qctx, "Z", 3);
    drawPiece(qctx, "O", 6);
    drawPiece(qctx, "T", 9);
    drawPiece(qctx, "J", 12);
  };
  tex.src = "https://i.imgur.com/J5LG3O8.png";

  const pieces = {
    I: { shape: ["0000", "1111", "0000", "0000"], color: "#0F9BD7" },
    O: { shape: ["0000", "0110", "0110", "0000"], color: "#E39F02" },
    T: { shape: ["0000", "0100", "1110", "0000"], color: "#AF298A" },
    J: { shape: ["0000", "1000", "1110", "0000"], color: "#2141C6" },
    L: { shape: ["0000", "0010", "1110", "0000"], color: "#E35B02" },
    S: { shape: ["0000", "0110", "1100", "0000"], color: "#59B101" },
    Z: { shape: ["0000", "1100", "0110", "0000"], color: "#D70F37" },
    X: { color: "#999999" },
    Y: { color: "#6A6A6A" },
  };

  function drawPiece(ctx, type, yoffset) {
    if (ctx.canvas.id == "holdCanvas") {
      clearHoldCanvas();
    }
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (pieces[type]["shape"][i][j] === "1") {
          DrawBlock(ctx, j, i + yoffset, "YXZLOSIJT".indexOf(type), false, tex);
        }
      }
    }
  }

  function clearHoldCanvas() {
    hctx.clearRect(0, 0, holdcanvas.width, holdcanvas.height);
  }
}

export default DrawQandHold;
