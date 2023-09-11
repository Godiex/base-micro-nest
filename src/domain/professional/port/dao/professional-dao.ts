import { ProfessionalDto } from '../../../../application/professional/query/dto/professional.dto';

export abstract class ProfessionalDao {
  abstract toList(): Promise<ProfessionalDto[]>;
}
