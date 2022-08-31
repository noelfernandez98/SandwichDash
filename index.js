kaboom({
  height: 755,
  width: 1500,
	// Set the default font
	font: "sinko",
  	// Scale the whole game up
	scale: 2,
	// Set the default font
	font: "sinko"
});

loadSprite("clearsky", "DinerPic.jpg")
loadSprite("meat", "meat.png")
loadSprite("lettuce", "lettuce.png")
loadSprite("onions", "onions.png")
loadSprite("tomatoes", "tomatoes.png")
loadSprite("bread1", "bread.png")
loadSprite("bread2", "bread.png")
loadSprite("player", "character.png");
loadSprite("bean", "plate.png")

let background = add([
  sprite("clearsky"),
  pos(width() / 2, height() / 2),
  origin("center"),
  scale(1),
  fixed()
]);

let player = add([
  sprite("player"),
  pos(width() / 2, height()/1.4),
  origin("center"),
  scale(3)
]);

const SPEED = 320


onKeyDown("left", () => {
	player.move(-SPEED, 0)
})
onKeyDown("right", () => {
	player.move(SPEED, 0)
})


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
    //  howToPlay.addEventListener("click",function(){    document.open("instructions.html","How To Play", "width=600,height=600")})
    //  const start=document.getElementById("start")
    //  start.addEventListener("click", function(){
  //  start.hidden=true
  //  howToPlay.hidden=true
    //  })
     
    
     //Collison section
=======

     
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