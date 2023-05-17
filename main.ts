input.onGesture(Gesture.Shake, function () {
    if (randint(0, 10) >= 5) {
        basic.showArrow(ArrowNames.East)
    } else if (randint(0, 10) < 5) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showString("over!")
    }
})
