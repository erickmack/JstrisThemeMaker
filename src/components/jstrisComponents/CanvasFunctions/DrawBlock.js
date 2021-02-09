function drawBlock(ctx, x, y, color, ghost,tex) {
  const block_size = 24;
  if (ghost) {
    ctx.globalAlpha = 0.5;
  }
  ctx.drawImage(
    tex,
    color * tex.height,
    0,
    tex.height,
    tex.height,
    x * block_size,
    y * block_size,
    block_size,
    block_size
  );
  ctx.globalAlpha = 1;
  //drawRectangle(x*block_size,y*block_size,block_size,block_size, colors[color]);
}

export default drawBlock;
