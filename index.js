kaboom({
	// Scale the whole game up
	scale: 2,
	// Set the default font
	font: "sinko",
})
;
 loadSprite("clearsky", "DinerPic.jpg")
 loadSprite("meat", "meat.png")
loadSprite("lettuce", "lettuce.png")
loadSprite("onions", "onions.png")
loadSprite("tomatoes", "tomatoes.png")
loadSprite("bread1", "bread.png")
loadSprite("bread2", "bread.png")
loadSprite("cheese", "cheese.png")
// Load assets
loadSprite("bean", "plate.png")


scene('intro', ()=>{
	let background = add([
	  sprite("clearsky"),
	  pos(width() / 2, height() / 2),
	  origin("center"),
	  scale(1),
	  fixed()
	]);
	const start=document.getElementById("start")
     start.addEventListener("click", function(){
   start.hidden=true,
 
	go('game')
     })
})
go('intro')

scene('game', ()=>{
let background = add([
	  sprite("clearsky"),
	  pos(width() / 2, height() / 2),
	  origin("center"),
	  scale(1),
	  fixed()
	]);
// Define player movement speed (pixels per second)
const SPEED = 320;
// Add player game object
const player = add([
	sprite("bean"),
	// center() returns the center point vec2(width() / 2, height() / 2)
	pos(center()),
])
// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})
onKeyDown("right", () => {
	player.move(SPEED, 0)
})
onKeyDown("up", () => {
	player.move(0, -SPEED)
})
onKeyDown("down", () => {
	player.move(0, SPEED)
})
// onClick() registers an event that runs once when left mouse is clicked
onClick(() => {
	// .moveTo() is provided by pos() component, changes the position
	player.moveTo(mousePos())
})
add([
	// text() component is similar to sprite() but renders text
	text("Press arrow keys"),
	pos(550, 12),
])

for (let i = 0; i < 5; i++) {
loop(50, () => {
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("lettuce"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		 scale(.2),
      move(DOWN, 10),
	])

})
}


for (let i = 0; i < 5; i++) {
loop(50, () => {
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("meat"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		 scale(.2),
      move(DOWN, 10),
	])

})
}
for (let i = 0; i < 5; i++) {
loop(50, () => {
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("onions"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		 scale(.2),
      move(DOWN, 10),
	])
})
}
for (let i = 0; i < 5; i++) {
loop(50, () => {
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("tomatoes"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		 scale(.2),
      move(DOWN, 10),
	])
})
}
for (let i = 0; i < 5; i++) {
loop(50, () => {
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("bread1"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		 scale(.2),
      move(DOWN, 10),
	])
})
}
for (let i = 0; i < 5; i++) {
loop(50, () => {
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("cheese"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		 scale(.2),
      move(DOWN, 10),
	])
})
}
for (let i = 0; i < 2; i++) {
loop(500, () => {
	const x = rand(0, width())
	const y = rand(0, height())

	add([
		sprite("bread1"),
		pos(x, y),
		// Both objects must have area() component to enable collision detection between
		area(),
		 scale(.2),
      move(DOWN, 10),
	])
})
}


     const howToPlay=document.getElementById("instructions")
     howToPlay.addEventListener("click",function(){    document.open("instructions.html","How To Play", "width=600,height=600")})
     
     
//      loadSound("OtherworldlyFoe", "music.m4a")

// // play() to play audio
// // (This might not play until user input due to browser policy)
// const music = play("OtherworldlyFoe", {
// 	loop: true,
// })

// // Adjust global volume
// volume(0.5)

// const label = add([
// 	text(),
// ])

// function updateText() {
// 	label.text = `
// ${music.isPaused() ? "Paused" : "Playing"}
// Time: ${music.time().toFixed(2)}
// Tolume: ${music.volume().toFixed(2)}
// Tetune: ${music.detune().toFixed(2)}
// 	`.trim()
// }

// updateText()

// // Update text every frame
// onUpdate(updateText)

// // Adjust music properties through input
// onKeyPress("space", () => {
// 	if (music.isPaused()) {
// 		music.play()
// 	} else {
// 		music.pause()
// 	}
// })

// onKeyPress("up", () => music.volume(music.volume() + 0.1))
// onKeyPress("down", () => music.volume(music.volume() - 0.1))
// onKeyPress("left", () => music.detune(music.detune() - 100))
// onKeyPress("right", () => music.detune(music.detune() + 100))
// onKeyPress("escape", () => music.stop())

// const keyboard = "awsedftgyhujk"

// // Simple piano with "bell" sound and the second row of a QWERTY keyboard
// for (let i = 0; i < keyboard.length; i++) {
// 	onKeyPress(keyboard[i], () => {
// 		play("bell", {
// 			// The original "bell" sound is F, -500 will make it C for the first key
// 			detune: i * 100 - 500,
// 		})
// 	})
// }

})