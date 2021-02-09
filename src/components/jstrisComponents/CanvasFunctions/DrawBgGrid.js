const DrawBgGrid = (mode,elem) => {
  const bgcanvas = document.querySelector(elem);
  const bgctx = bgcanvas.getContext("2d");

  const block_size = 24;

  mode = typeof mode === "undefined" ? 1 : mode; //default value for optinal parameter
  bgctx.rect(0, 0, bgcanvas.width, bgcanvas.height);
  bgctx.fillStyle = "#000000";
  bgctx.fill();

  bgctx.beginPath();
  bgctx.lineWidth = 1;

  if (mode === 1) {
    for (var i = 1; i < 10; i++) {
      bgctx.moveTo(i * block_size + 0.5, 0);
      bgctx.lineTo(i * block_size + 0.5, bgcanvas.height);
    }
    for (var i = 1; i < 20; i++) {
      bgctx.moveTo(0, i * block_size + 0.5);
      bgctx.lineTo(241, i * block_size + 0.5);
    }
    bgctx.strokeStyle = "#101010";
    bgctx.stroke();
    bgctx.beginPath();
    for (var i = 0; i < 9; i++) {
      for (var y = 1; y < 20; y++) {
        bgctx.moveTo(i * block_size + 0.75 * block_size, y * block_size + 0.5);
        bgctx.lineTo(
          (i + 1) * block_size + 0.2 * block_size,
          y * block_size + 0.5
        );
      }
    }
    for (var i = 0; i < 19; i++) {
      for (var x = 1; x < 10; x++) {
        bgctx.moveTo(x * block_size + 0.5, i * block_size + 0.75 * block_size);
        bgctx.lineTo(
          x * block_size + 0.5,
          (i + 1) * block_size + 0.2 * block_size
        );
      }
    }
    bgctx.strokeStyle = "#202020";
    bgctx.stroke();
    bgctx.beginPath();
  } else if (mode === 2) {
    for (var i = 0; i < 9; i++) {
      for (var y = 1; y < 20; y++) {
        bgctx.moveTo(i * block_size + 0.75 * block_size, y * block_size - 0.5);
        bgctx.lineTo(
          (i + 1) * block_size + 0.2 * block_size,
          y * block_size - 0.5
        );
      }
    }
    for (var i = 0; i < 19; i++) {
      for (var x = 1; x < 10; x++) {
        bgctx.moveTo(x * block_size - 0.5, i * block_size + 0.75 * block_size);
        bgctx.lineTo(
          x * block_size - 0.5,
          (i + 1) * block_size + 0.2 * block_size
        );
      }
    }
  } else if (mode === 3) {
    for (var i = 1; i < 10; i++) {
      bgctx.moveTo(i * block_size + 0.5, 0);
      bgctx.lineTo(i * block_size + 0.5, bgcanvas.height);
    }
  } else if (mode === 4) {
    for (var i = 1; i < 10; i++) {
      bgctx.moveTo(i * block_size + 0.5, 0);
      bgctx.lineTo(i * block_size + 0.5, bgcanvas.height);
    }
    for (var i = 1; i < 20; i++) {
      bgctx.moveTo(0, i * block_size + 0.5);
      bgctx.lineTo(241, i * block_size + 0.5);
    }
  }

  bgctx.strokeStyle = "#393939"; //grid color
  bgctx.stroke();

  bgctx.lineWidth = 2;
  bgctx.strokeRect(1, 1, 240, bgcanvas.height - 2);
};

export default DrawBgGrid;
