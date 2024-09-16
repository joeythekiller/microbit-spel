input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        speed = speed - 50
    } else {
        music.play(music.stringPlayable("C5 A B G A F G E ", 214), music.PlaybackMode.InBackground)
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    speed = speed - 75
})
let sprite: game.LedSprite = null
let speed = 0
speed = 200
sprite = game.createSprite(2, 2)
led.plot(2, 4)
led.plot(2, 5)
led.plot(2, 1)
led.plot(2, 0)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(speed)
})
