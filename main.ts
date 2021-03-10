input.onButtonPressed(Button.A, function () {
    INDEX += 1
    basic.showNumber(INDEX)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(INDEX)
    basic.showNumber(Barcelona)
})
input.onGesture(Gesture.Shake, function () {
    Barcelona += 1
    basic.showNumber(Barcelona)
})
let Barcelona = 0
let INDEX = 0
INDEX = 0
Barcelona = 0
basic.forever(function () {
	
})
