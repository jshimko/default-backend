
const width = 700;
const height = 500;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, width, height);
ctx.fill();
const imgData = ctx.getImageData(0, 0, width, height);
const pix = imgData.data;
setInterval(flickering, 30);

function flickering() {
  for (let i = 0; i < pix.length; i += 4) {
    const color = (Math.random() * 255) + 50;
    pix[i] = color;
    pix[i + 1] = color;
    pix[i + 2] = color;
  }
  ctx.putImageData(imgData, 0, 0);
}
