import { Professional } from '../../model/professional';

export abstract class ProfessionalRepository {
  abstract save(professional: Professional): Promise<void>;
}
