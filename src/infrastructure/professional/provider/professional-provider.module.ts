import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalEntity } from '../entity/professional.entity';
import { CreateProfessionalService } from '../../../domain/professional/service/create-professional-service';
import { ProfessionalRepository } from '../../../domain/professional/port/repository/professional-repository';
import { createProfessionalServiceProvider } from './service/create-professional-service.provider';
import { professionalDaoProvider } from './dao/professional-dao.provider';
import { professionalRepositoryProvider } from './repository/professional-repository.provider';
import { ProfessionalDao } from '../../../domain/professional/port/dao/professional-dao';
import { ProfessionalToListHandler } from '../../../application/professional/query/professional-to-list.handler';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessionalEntity])],
  providers: [
    {
      provide: CreateProfessionalService,
      inject: [ProfessionalRepository],
      useFactory: createProfessionalServiceProvider,
    },
    ProfessionalToListHandler,
    professionalDaoProvider,
    professionalRepositoryProvider,
  ],
  exports: [
    ProfessionalToListHandler,
    CreateProfessionalService,
    ProfessionalRepository,
    ProfessionalDao,
  ],
})
export class ProfessionalProviderModule {}
