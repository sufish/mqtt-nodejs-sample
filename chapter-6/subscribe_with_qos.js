var args = require('yargs').argv;
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io', {
    clientId: "mqtt_sample_subscriber_id_2",
    clean: false
})


client.on('connect', function (connack) {
    if (connack.returnCode == 0) {
        client.subscribe("home/sample_topic", {qos: args.qos}, function () {
            client.on('packetsend', function (packet) {
                console.log(`send: ${packet.cmd}`)
            })
            client.on('packetreceive', function (packet) {
                console.log(`receive: ${packet.cmd}`)
            })
        })
    } else {
        console.log(`Connection failed: ${connack.returnCode}`)
    }
})
