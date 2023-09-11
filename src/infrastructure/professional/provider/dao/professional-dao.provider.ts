import { ProfessionalDao } from '../../../../domain/professional/port/dao/professional-dao';
import { ProfessionalDaoMySql } from '../../adapter/dao/professional-dao';

export const professionalDaoProvider = {
  provide: ProfessionalDao,
  useClass: ProfessionalDaoMySql,
};
