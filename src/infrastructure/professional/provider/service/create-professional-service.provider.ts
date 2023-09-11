import { ProfessionalRepository } from '../../../../domain/professional/port/repository/professional-repository';
import { CreateProfessionalService } from '../../../../domain/professional/service/create-professional-service';

export function createProfessionalServiceProvider(
  professionalRepository: ProfessionalRepository,
) {
  return new CreateProfessionalService(professionalRepository);
}
