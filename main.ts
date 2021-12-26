controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setVelocity(-100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setVelocity(100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite2.setVelocity(0, 0)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    mySprite2.setVelocity(0, 0)
})
let mySprite2: Sprite = null
info.setScore(0)
info.player2.setScore(0)
info.player1.setScore(0)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
    1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
    `, SpriteKind.Player)
mySprite2.setPosition(80, 10)
mySprite.setPosition(80, 110)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
mySprite3.setStayInScreen(true)
mySprite3.setBounceOnWall(true)
mySprite3.setFlag(SpriteFlag.StayInScreen, true)
pause(500)
mySprite3.setVelocity(65, 65)
forever(function () {
    music.setVolume(255)
    if (mySprite3.overlapsWith(mySprite)) {
        mySprite3.setVelocity(mySprite3.vx, mySprite3.vy * -1)
        music.knock.playUntilDone()
        pause(200)
    }
    if (mySprite3.overlapsWith(mySprite2)) {
        mySprite3.setVelocity(mySprite3.vx, mySprite3.vy * -1)
        music.knock.playUntilDone()
        pause(200)
    }
})
forever(function () {
    if (mySprite3.y > mySprite.y) {
        info.player2.changeScoreBy(1)
        pause(500)
    }
    if (mySprite3.y < mySprite2.y) {
        info.player1.changeScoreBy(1)
        pause(500)
    }
})
