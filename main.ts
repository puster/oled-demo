input.onButtonPressed(Button.A, function () {
    OLED.writeNumNewLine(134.432)
    OLED.writeStringNewLine("")
    OLED.writeNumNewLine(56.78)
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
})
OLED.init(128, 64)
OLED.writeStringNewLine("Hello world")
OLED.writeStringNewLine("")
