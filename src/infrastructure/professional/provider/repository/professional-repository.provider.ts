import { ProfessionalRepository } from '../../../../domain/professional/port/repository/professional-repository';
import { ProfessionalRepositoryMysql } from '../../adapter/repository/professional-repository-mysql';

export const professionalRepositoryProvider = {
  provide: ProfessionalRepository,
  useClass: ProfessionalRepositoryMysql,
};
