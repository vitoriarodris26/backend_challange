import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entity.ts/Users';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  KafkaModule
],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],

})
export class UserModule {}
