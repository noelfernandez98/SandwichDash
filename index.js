kaboom({
	// Scale the whole game up
	scale: 1,
	// Set the default font
	font: "sinko",
})
;
 loadSprite("clearsky", "DinerPic.jpg")
let background = add([
  sprite("clearsky"),
  pos(width() / 2, height() / 2),
  origin("center"),
  scale(1),
  fixed()
]);
loadSprite("meat", "meat.png")
loadSprite("lettuce", "lettuce.png")
loadSprite("onions", "onions.png")
loadSprite("tomatoes", "tomatoes.png")
loadSprite("bread1", "bread.png")
loadSprite("bread2", "bread.png")
// loadSprite("cheese", "cheese.png")
// Load assets
loadSprite("bean", "plate.png")
// Define player movement speed (pixels per second)
const SPEED = 320
// Add player game object

// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})
onKeyDown("right", () => {
	player.move(SPEED, 0)
})

const options = ["meat", "lettuce", "onions", "bread2", "tomatoes"]
const randomizer = () => options[Math.floor(Math.random() * arr.length)]

const looper = () => {
  loop(1, () => {
    // add tree
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
	// text() component is similar to sprite() but renders text
	text("Press arrow keys", { width: width() / 2 }),
	pos(12, 12),
])

     const howToPlay=document.getElementById("instructions")
     howToPlay.addEventListener("click",function(){    document.open("instructions.html","How To Play", "width=600,height=600")})
     const start=document.getElementById("start")
     start.addEventListener("click", function(){
   start.hidden=true
   howToPlay.hidden=true
     })
     
     //Collison section
     


