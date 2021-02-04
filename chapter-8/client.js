var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io', {
    clientId: "mqtt_sample_publisher_chapter_8",
    clean: false,
    will:{
        topic : 'client/status',
        qos: 1,
        retain: true,
        payload: JSON.stringify({status: 'offline'})
    }
})

client.on('connect', function (connack) {
    if(connack.returnCode == 0){
        client.publish("client/status", JSON.stringify({status: 'online'}), {qos: 1, retain: 1})
    }else{
        console.log(`Connection failed: ${connack.returnCode}`)
    }
})
