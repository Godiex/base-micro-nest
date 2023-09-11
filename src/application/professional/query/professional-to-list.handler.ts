import { Injectable } from '@nestjs/common';
import { ProfessionalDao } from '../../../domain/professional/port/dao/professional-dao';
import { ProfessionalDto } from './dto/professional.dto';

@Injectable()
export class ProfessionalToListHandler {
  constructor(private _professionalDao: ProfessionalDao) {}

  async execute(): Promise<ProfessionalDto[]> {
    return this._professionalDao.toList();
  }
}
