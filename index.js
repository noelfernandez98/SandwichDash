kaboom({
	// Scale the whole game up
	scale: 2,
	// Set the default font
	font: "sinko",
	fontSize:"lar"
});

//Timer

let scores=[]
var score = 0
loadSprite("clearsky", "DinerPic.jpg")
loadSprite("meat", "meat.png")
loadSprite("lettuce", "lettuce.png")
loadSprite("onions", "onions.png")
loadSprite("tomatoes", "tomatoes.png")
loadSprite("bread", "bread.png")
loadSprite("bread2", "bread.png")
loadSprite("cheese", "cheese.png")
loadSprite("burger", "burger.png")
loadSprite("sock", "sock.png")
loadSprite("extra", "extra.jfif")
// Load assets
loadSprite("bean", "bread.png")
loadSprite("bone", "bone1.png")
loadSprite("bomb", "bomb1.png")
loadSprite("boot", "boot1.png")
loadSprite("x", "x.png")


//Opening scene

scene('intro', () => {
	let background = add([
		sprite("clearsky"),
		pos(width() / 2, height() / 2),
		origin("center"),
		scale(1),
		fixed()
	]);

	add([

		text("Welcome to Sandwich Dash",{size: 20}),
		pos(220, 200)
	])

	//create Landing page buttons
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
			}
			else {
				btn.scale = vec2(1)
				btn.color = rgb()
			}
		})

	}
	addButton("Start", (200, 60), function() {

		go('game')
	})

	addButton("How to Play",(200, 80), function() { document.open("instructions.html", "How To Play", "width=700,height=700") })
})
go('intro')



//Ending scene
var lives = 3;
scene('outro', () => {
	let background = add([
		sprite("clearsky"),
		pos(width() / 2, height() / 2),
		origin("center"),
		scale(1),
		fixed()
	]);

	if (lives == 0) {
		add([

			text("Sorry You Ran Out of Lives",{size: 20}),
			pos(400, 100)
		])
	} else {
		add([

			text("Sorry You Ran Out Of Time",{size: 20}),
			pos(200, 100)
		])
	}
	
	lives=3

	//create Landing page buttons
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
			}
			else {
				btn.scale = vec2(1)
				btn.color = rgb()
			}
		})

	}
	addButton("Play Again", (500, 100), function() {

		go('game')
	})

	addButton("Extras", (400, 250), function() {

		go('extra')
	})
	addButton("How to Play", (200, 200), function() { document.open("instructions.html", "How To Play", "width=700,height=700") })
	

	add([
		// text() component is similar to sprite() but renders text
		text(`Your New High Score is ${Math.max(...scores)}`,{size: 20}),
		pos(250, 12),
	])
	
add([
		sprite("burger"),
		pos(width() / 2, height() / 2),
		origin("center"),
		scale(0.3),
		fixed()
	]);
})



//Game logic scene

scene('game', () => {
	let background = add([
		sprite("clearsky"),
		pos(width() / 2, height() / 2),
		origin("center"),
		scale(1),
		fixed()
	]);

var timeOfGame = 60

let timertext=add([
	text(`Timer:${new Date((timeOfGame)* 1000).toISOString().substring(14, 19)}`),
	pos(15,70)	
])

loop(1,()=>{
	timeOfGame--
	if (timeOfGame === 0) {
		go("outro")
	}
	timertext.text = `Timer:${new Date((timeOfGame)* 1000).toISOString().substring(14, 19)}`;
})
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
			}
			else {
				btn.scale = vec2(1)
				btn.color = rgb()
			}
		})

	}

	loadSound("music", "music.m4a")
	const music = play("music", {
	loop: true,
})

	addButton("Restart", (90, 35), function() {

		go('outro')
	})


	//Movement
	// Define player movement speed (pixels per second)
	const SPEED = 320;
	// Add player game object
	var player = add([
		sprite("bean"),
		scale(0.2),
		area(),
		// solid() component makes the object can't move pass other solid objects
		solid(),
		// center() returns the center point vec2(width() / 2, height() / 2)
		pos(width() / 2, height() / 1.25),
	])
	// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
	onKeyDown("left", () => {
		// .move() is provided by pos() component, move by pixels per second
		player.move(-SPEED, 0)
	})
	onKeyDown("right", () => {
		player.move(SPEED, 0)
	})

	// onClick() registers an event that runs once when left mouse is clicked
	onClick(() => {
		// .moveTo() is provided by pos() component, changes the position
		player.moveTo(mousePos())
	})

var score=0
let scoreText=add([
		// text() component is similar to sprite() but renders text
		text(`Score ${score}`),
		pos(550, 12),
	])
scores.push(score)



	scores.push(score)
	//Randomizer
	const toxic = ["boot", "bone", "bomb","sock"]
	const options = ["meat", "lettuce", "onions", "bread", "tomatoes", "cheese"]
	const randomizer = () => options[Math.floor(Math.random() * options.length)]

	const looper = () => {
		loop(1, () => {
			add([
				sprite(randomizer()),
				pos(rand(vec2(width())).x, 10),
		
				`tag1`,
				area(),
				solid(),
				scale(.2),
				move(DOWN, 240),
				'friendly'
			])
		});
	}

	looper()
	const randomizer2 = () => toxic[Math.floor(Math.random() * toxic.length)]

	const looper2 = () => {
		loop(2, () => {
			add([
				sprite(randomizer2()),
				pos(rand(vec2(width())).x, 10),
				`tag1`,
				area(),
	
				solid(),
				scale(.2),
				move(DOWN, 200),
				"enemy"
			])
		});
	}

	looper2()


	add([
		text("Press arrow keys", { width: width() / 2 }),
		pos(12, 12),
	])


//Collision

	player.onCollide("friendly", (food) => {
	
			score += 1
			scoreText.text=`Score ${score}`
		
		scores.push(score)
		// let method=food.follow(player,vec2(0,-80))
		destroy(food)
    
      
		
	})
	
	
	player.onCollide("enemy", (enemy) => {
		lives -= 1
		score -= 1
			scoreText.text=`Score ${score}`
		
		scores.push(score)
		if (lives == 2) {
			let livesImg1 = add([
				sprite("x"),
				pos(550, 24),
				scale(0.1)
			])
		} else if (lives == 1) {
			let livesImg2 = add([
				sprite("x"),
				pos(590, 24),
				scale(0.1)
			])
		} else if (lives == 0) {
			go("outro")
		}
		

			destroy(enemy)

	})
	
})


//Music
loadSound("music", "music.m4a")

// play() to play audio
// (This might not play until user input due to browser policy)
const music = play("music", {
	loop: true,
})

// Adjust global volume
volume(0.5)


scene('extra', () => {
	let background = add([
		sprite("extra"),
		pos(width() / 2, height() / 2),
		origin("center"),
		scale(2),
		fixed()
	]);

add([

		text("Coming Soon"),
		pos(500, 200),
		scale(1.5)
	])

	loadSound("music", "music.m4a")
	const music = play("music", {
	loop: true,
})
})

