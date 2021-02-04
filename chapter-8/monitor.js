var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io', {
    clientId: "mqtt_sample_subscriber_id_chapter_8_2",
    clean: false
})

client.on('connect', function () {
        client.subscribe("client/status", {qos: 1})
})

client.on("message", function (_, message) {
    var jsonPayload = JSON.parse(message.toString())
    console.log(`client is ${jsonPayload.status}`)
})
