import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const sendMessage = async () => {
  await producer.connect();
  await producer.send({
    topic: "test-topic",
    messages: [{ key: "key1", value: "Hello Kafka! 5" }],
  });
  await producer.disconnect();
};

sendMessage().catch(console.error);
