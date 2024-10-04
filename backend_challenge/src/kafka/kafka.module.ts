import { Module } from "@nestjs/common";
import { KafkaProducerService } from "./kafkaProducer.service";
import { KafkaConsumerService } from "./kafkaConsumer.service";


@Module({
  providers: [KafkaProducerService, KafkaConsumerService],
  exports: [KafkaProducerService],
})
export class KafkaModule {}
