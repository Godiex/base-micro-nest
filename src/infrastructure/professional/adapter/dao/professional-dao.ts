import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProfessionalDto } from '../../../../application/professional/query/dto/professional.dto';
import { ProfessionalDao } from '../../../../domain/professional/port/dao/professional-dao';

@Injectable()
export class ProfessionalDaoMySql implements ProfessionalDao {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async toList(): Promise<ProfessionalDto[]> {
    return this.entityManager.query('SELECT u.name FROM PROFESSIONAL u');
  }
}
