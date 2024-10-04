// kafka.consumer.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private kafka: Kafka;

  constructor() {
    this.kafka = new Kafka({
      brokers: ['kafka:9092'], // Endereço do broker Kafka
    });
  }

  async onModuleInit() {
    const consumer = this.kafka.consumer({ groupId: 'user-consumer-group' });

    await consumer.connect();
    await consumer.subscribe({ topic: 'user-events', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const userEvent = JSON.parse(message.value.toString());
        console.log('Evento recebido:', userEvent);
        // Adicione lógica adicional, como logging ou auditoria
      },
    });
  }
}
