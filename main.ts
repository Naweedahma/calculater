input.onButtonPressed(Button.A, function () {
    basic.showNumber(first_number)
    first_number += 1
    basic.showNumber(first_number)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(first_number)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showNumber(second_number)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showNumber(first_number + second_number)
    first_number = 0
    second_number = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(second_number)
    second_number += 1
    basic.showNumber(second_number)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(second_number)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(first_number)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.showNumber(first_number - second_number)
    first_number = 0
    second_number = 0
})
let second_number = 0
let first_number = 0
first_number = 0
second_number = 0
basic.showString("Start")
basic.forever(function () {
	
})
