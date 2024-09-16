def on_button_pressed_a():
    global speed
    if sprite.get(LedSpriteProperty.X) == 2:
        game.add_score(1)
        speed = speed - 50
    else:
        music.play(music.string_playable("C5 A B G A F G E ", 214),
            music.PlaybackMode.IN_BACKGROUND)
        game.game_over()
input.on_button_pressed(Button.A, on_button_pressed_a)

speed = 0
speed = 200
sprite = game.create_sprite(2, 2)
led.plot(2, 4)
led.plot(2, 5)
led.plot(2, 1)
led.plot(2, 0)

def on_forever():
    sprite.move(1)
    sprite.if_on_edge_bounce()
    basic.pause(speed)
basic.forever(on_forever)
