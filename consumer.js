const amqp = require('amqplib');

async function connect() {
    try {
        // Establish a tcp connection
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        const result = await channel.assertQueue('jobs');

        channel.consume('jobs', message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Received job with input ${input.number}`);
            if (input.number == 8) {
                channel.ack(message);
            }
        });

        console.log("Waiting for messages...");
    } catch (ex) {
        console.log(ex);
    }
}
connect();