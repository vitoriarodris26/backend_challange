// kafka.producer.service.ts
import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaProducerService {
  private kafka: Kafka;

  constructor() {
    this.kafka = new Kafka({
      brokers: ['kafka:9092'], // Endereço do broker Kafka
    });
  }

  async sendUserEvent(event: { type: string; user: any }) {
    const producer = this.kafka.producer();
    await producer.connect();

    await producer.send({
      topic: 'user-events',
      messages: [
        {
          key: event.type, // Pode ser "CREATE" ou "UPDATE"
          value: JSON.stringify(event.user),
        },
      ],
    });

    await producer.disconnect();
  }
}
