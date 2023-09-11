import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './infrastructure/config/environment/env-variables.enum';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppLogger } from './infrastructure/config/logger.service';
import { FilterExceptionBusiness } from './infrastructure/exceptions/filter-exceptions-business';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = await app.resolve(AppLogger);
  const configService = app.get(ConfigService);

  app.useGlobalFilters(new FilterExceptionBusiness(logger));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Bloque Arquitectura Hexagonal Node')
    .setDescription(
      "Bloque que hace uso de Nest.js para la creación de API's con Node.js",
    )
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/api/doc', app, swaggerDocument);

  await app.listen(configService.get(EnvVariables.APPLICATION_PORT));
  app.setGlobalPrefix(configService.get(EnvVariables.APPLICATION_CONTEXT_PATH));
}
bootstrap();
