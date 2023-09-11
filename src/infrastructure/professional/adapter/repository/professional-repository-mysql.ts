import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Professional } from '../../../../domain/professional/model/professional';
import { ProfessionalRepository } from '../../../../domain/professional/port/repository/professional-repository';
import { ProfessionalEntity } from '../../entity/professional.entity';

@Injectable()
export class ProfessionalRepositoryMysql implements ProfessionalRepository {
  constructor(
    @InjectRepository(ProfessionalEntity)
    private readonly repository: Repository<ProfessionalEntity>,
  ) {}

  async save(professional: Professional): Promise<void> {
    const entity = new ProfessionalEntity();
    entity.mapData(professional);
    await this.repository.save(entity);
  }
}
