var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io', {
    clientId: "mqtt_identical_1",
})

client.on('connect', function (connack) {
    console.log(`return code: ${connack.returnCode}, sessionPresent: ${connack.sessionPresent}`)
})

client.on('offline', function () {
    console.log("client go offline")
})
