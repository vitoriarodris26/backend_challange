// import { Injectable } from '@nestjs/common';
// import { Kafka } from 'kafkajs';

// @Injectable()
// export class KafkaService {
//   private kafka = new Kafka({
//     clientId: 'user-service',
//     brokers: ['kafka:9092'],
//   });
//   private producer = this.kafka.producer();

//   async onModuleInit() {
//     await this.producer.connect();
//   }

//   async sendUserEvent(userId: number, event: string) {
//     await this.producer.send({
//       topic: 'user-events',
//       messages: [{ value: JSON.stringify({ userId, event }) }],
//     });
//   }

//   async onModuleDestroy() {
//     await this.producer.disconnect();
//   }
// }