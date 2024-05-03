//animazione iniziale

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.beginPath();      // Start a new path
ctx.moveTo(100, 50);  // Move the pen to x=100, y=50.
ctx.stroke();         // Render the path
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 30, 30); // (x, y, width, height);


const size = 30;
ctx.fillStyle = 'blue';

for (let x = 0; x < canvas.width; x += size) {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clean up
	ctx.fillRect(x, 50, size, size);
}

let x = 0;
const id = setInterval(() => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(x, 50, size, size);
	x += size;

	if (x >= canvas.width) {
		clearInterval(id);
	}
}, 100);



// Animazioni multiple

let squares = [];
let started = false;

function play() {
  // Add 0 as x value for object to start from the left.
  squares.push(0);

  if (!started) {
      started = true;
      setInterval(() => {
        tick();
      }, 100)
  }
}

function tick() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Paint objects
  squares.forEach(x => ctx.fillRect(x, 50, size, size));

  squares = squares.map(x => x += size) // move x to right
      .filter(x => x < canvas.width);  // remove when at end
}

