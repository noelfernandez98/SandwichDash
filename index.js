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
loadSprite("bean", "bread.png")


scene('intro', ()=>{
	let background = add([
	  sprite("clearsky"),
	  pos(width() / 2, height() / 2),
	  origin("center"),
	  scale(1),
	  fixed()
	]);
	
	add([
		
		text("Welcome to SandWich Dash"),
		pos(500,250)])
		
		
		function addButton(txt, p, f) {

	const btn = add([
		text(txt),
		pos(p),
		area({ cursor: "pointer", }),
		scale(1),
		origin("center"),
	])

	btn.onClick(f)

	btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.color = rgb(
				wave(0, 255, t),
				wave(0, 255, t + 2),
				wave(0, 255, t + 4),
			)
			btn.scale = vec2(1.2)
		} else {
			btn.scale = vec2(1)
			btn.color = rgb()
		}
	})

}
addButton("start",(200,350))
addButton("How to Play",(550,350))
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
	scale(0.2),
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
var score=0

add([
	// text() component is similar to sprite() but renders text
	text(`Score ${score}`),
	pos(550, 12),
])



//Restart Button
// const button=document.getElementById("button")
// button.innerText="Restart"
// button.addEventListener("click",function (){
// 	  start.hidden=true,
 
// 	go('game')
// })
// add([

// 	text(`Restart ${button}`),
// 		pos(30, 30),
// 	])
const options = ["meat", "lettuce", "onions", "bread2", "tomatoes"]
const randomizer = () => options[Math.floor(Math.random() * options.length)]

const looper = () => {
  loop(1, () => {
    add([
      sprite(randomizer()),
      pos(rand(vec2(width())).x, 10),
      `tag1`,
      area(),
      scale(.2),
      move(DOWN, 240),
    ])
  });
}

looper()

 add([
  sprite("bread2"),
  // pos(height() / 3, width() / 3),
   pos(player / 5, width() / 3),

   scale(.1),
  fixed()
])

add([
	text("Press arrow keys", { width: width() / 2 }),
	pos(12, 12),
])



     const howToPlay=document.getElementById("instructions")
     howToPlay.addEventListener("click",function(){    document.open("instructions.html","How To Play", "width=600,height=600")})
     



})



loadSound("OtherworldlyFoe", "music.m4a")

// play() to play audio
// (This might not play until user input due to browser policy)
const music = play("OtherworldlyFoe", {
	loop: true,
})

// Adjust global volume
volume(0.5)

const label = add([
	text(),
])

function updateText() {
	label.text = `
${music.isPaused() ? "Paused" : "Playing"}
Time: ${music.time().toFixed(2)}
Tolume: ${music.volume().toFixed(2)}
Tetune: ${music.detune().toFixed(2)}
	`.trim()
}

updateText()

// Update text every frame
onUpdate(updateText)

// Adjust music properties through input
onKeyPress("space", () => {
	if (music.isPaused()) {
		music.play()
	} else {
		music.pause()
	}
})

onKeyPress("up", () => music.volume(music.volume() + 0.1))
onKeyPress("down", () => music.volume(music.volume() - 0.1))
onKeyPress("left", () => music.detune(music.detune() - 100))
onKeyPress("right", () => music.detune(music.detune() + 100))
onKeyPress("escape", () => music.stop())

const keyboard = "awsedftgyhujk"

// Simple piano with "bell" sound and the second row of a QWERTY keyboard
for (let i = 0; i < keyboard.length; i++) {
	onKeyPress(keyboard[i], () => {
		play("bell", {
			// The original "bell" sound is F, -500 will make it C for the first key
			detune: i * 100 - 500,
		})
	})
}


onCollide("bean","lettuce",() => {
  	score++
})