import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [],
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
    }),
  ],
})
export class InfrastructureModule {}
