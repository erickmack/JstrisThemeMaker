import DrawBlock from "./DrawBlock";

function DrawQandHold(skin) {
  const holdcanvas = document.getElementById("holdCanvas");
  const hctx = holdcanvas.getContext("2d");

  const queuecanvas = document.getElementById("queueCanvas");
  const qctx = queuecanvas.getContext("2d");

  qctx.clearRect(0, 0, queuecanvas.width, queuecanvas.height);

  var tex = new Image();
  tex.onload = function () {
    drawPiece(hctx, "S", 0);
    drawPiece(qctx, "O", 0);
    drawPiece(qctx, "O", 3);
    drawPiece(qctx, "I", 6);
    drawPiece(qctx, "Z", 9);
    drawPiece(qctx, "Z", 12);
  };
  tex.src = skin;

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
    if (ctx.canvas.id === "holdCanvas") {
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
