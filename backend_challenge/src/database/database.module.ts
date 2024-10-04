import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import "dotenv/config";


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'postgres',
        entities: ['**/*.entity{.ts,.js}'],
        migrations: ["dist/migrations/*.js"],
        migrationsRun: true,
        synchronize: true,
        autoLoadEntities: true,
      }),
  ],
})
export class DatabaseModule {}