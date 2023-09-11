import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NodeEnv } from './config/environment/env-node.enum';
import { AppLogger } from './config/logger.service';
import { ProfessionalModule } from './professional/professional.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfigFactory } from './config/database.config';

@Module({
  providers: [AppLogger],
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: databaseConfigFactory,
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `env/${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
          .required(),
      }),
    }),
    ProfessionalModule,
  ],
})
export class InfrastructureModule {}
