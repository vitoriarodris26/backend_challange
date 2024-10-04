import { CacheModule, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/users.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', 
    }),
    DatabaseModule, 
    UserModule,
    KafkaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
