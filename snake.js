/** @type {HTMLCanvasElement} */
/** @type {CanvasRenderingContext2D} */

// Hello hi
let blockSize = 50
let rows = 25
let cols = 25
let canvas
let ctx
let speed = 10
let score = 0

let snakeX = blockSize * 5
let snakeY = blockSize * 5

let velocityX = 0
let velocityY = 0

let snakeBody = []

// Food
let foodX
let foodY

let gameOver = false

window.onload = function () {
	canvas = document.getElementById('canvas')
	canvas.height = rows * blockSize
	canvas.width = cols * blockSize
	ctx = canvas.getContext('2d')

	placeFood()

	document.addEventListener('keydown', inputHandler)

	setInterval(update, 1000 / speed)
}

function update() {
	// if snake goes past the canvas, it will appear on the other side
	if (snakeX > canvas.width) {
		snakeX = 0
	} else if (snakeX < 0) {
		snakeX = canvas.width
	}
	if (snakeY > canvas.height) {
		snakeY = 0
	} else if (snakeY < 0) {
		snakeY = canvas.height
	}
	snakeX += velocityX * blockSize
	snakeY += velocityY * blockSize

	// stretched out
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	ctx.fillStyle = 'lime'
	ctx.fillRect(snakeX, snakeY, blockSize, blockSize)

	ctx.fillStyle = 'red'
	ctx.fillRect(foodX, foodY, blockSize, blockSize)

	// Snake Movement

	// for (let i = 0; snakeBody.length; i++ ) {
	// 	context.fillRect(snakeBody[])
	// }

	// if (snakeX == foodX && snakeY == foodY) {
	// 	snakeBody.push([foodX, foodY])
	// 	placeFood()
	// 	score++
	// }

	// for (let i = snakeBody.length - 1; i > 0; i--) {
	// 	snakeBody[i] = snakeBody[i - 1]
	// }
}

function inputHandler(e) {
	// Fix bug that allows you to go backwards
	if (e.key === 'ArrowUp' && velocityY != 1) {
		velocityY = -1
		velocityX = 0
	} else if (e.key === 'ArrowDown' && velocityY != -1) {
		velocityY = 1
		velocityX = 0
	} else if (e.key === 'ArrowLeft' && velocityX != 1) {
		velocityY = 0
		velocityX = -1
	} else if (e.key === 'ArrowRight' && velocityX != -1) {
		velocityY = 0
		velocityX = 1
	}
}

function placeFood() {
	foodX = Math.floor(Math.random() * cols) * blockSize
	foodY = Math.floor(Math.random() * rows) * blockSize
}

// This is supposed to resize the canvas to the max width OR height of the screen size.
// onresize = () => {
// 	canvas.height = innerHeight
// 	canvas.width = innerHeight * aspectRatio
// }
