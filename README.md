## RabbitMQ
RabbitMQ uses the AMQP protocol.

## Cons
1. Too many abstractions
2. complex
3. Push model
    RabbitMQ server push all the messages to the consumer, which can cause extra load for consumer processing.
    Else where kafka works on pull model. Here, consumers pull the data what they need.
## Commands
1. docker run --name rabbitmq -p 5672:5672 rabbitmq
2. npm init -y
3. npm install amqplib
4. npm run publish <arg>
5. npm run consume