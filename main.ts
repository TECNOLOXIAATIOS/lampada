let ESTADO_DO_LED = "APAGADO"
basic.forever(function () {
    if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J1)) {
        if (ESTADO_DO_LED == "APAGADO") {
            ESTADO_DO_LED = "ENCENDIDO"
            PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
        } else {
            ESTADO_DO_LED = "APAGADO"
            PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        }
    }
})
