var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io', {
    clientId: "mqtt_sample_subscriber_id_1",
    clean: false
})

client.on('connect', function (connack) {
    if (connack.returnCode == 0) {
        console.log("unsubscribing")
        client.unsubscribe("home/2ndfloor/201/temperature", function (err) {
            if (err != undefined) {
                console.log("unsubscribe failed")
            } else {
                console.log("unsubscribe succeeded")
            }
            client.end()
        })
    } else {
        console.log(`Connection failed: ${connack.returnCode}`)
    }
})

