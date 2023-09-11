import { ProfessionalRepository } from '../port/repository/professional-repository';
import { Professional } from '../model/professional';

export class CreateProfessionalService {
  constructor(
    private readonly _professionalRepository: ProfessionalRepository,
  ) {}

  async execute(professional: Professional) {
    await this._professionalRepository.save(professional);
  }
}
