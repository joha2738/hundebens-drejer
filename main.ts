input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    speed = 100
})
input.onButtonPressed(Button.AB, function () {
    pins.analogWritePin(AnalogPin.P2, 75)
    speed = 10
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    speed = 0
})
let speed = 0
speed = 1023
led.setBrightness(50)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    if (speed == 0) {
        led.unplot(0, 2)
    } else if (speed == 10) {
        led.toggle(0, 2)
    } else if (speed == 100) {
        led.plot(0, 2)
    } else {
    	
    }
})
