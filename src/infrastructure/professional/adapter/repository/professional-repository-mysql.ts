import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Professional } from '../../../../domain/professional/model/professional';
import { ProfessionalRepository } from '../../../../domain/professional/port/repository/professional-repository';

@Injectable()
export class ProfessionalRepositoryMysql implements ProfessionalRepository {
  constructor(
    @InjectRepository(ClienteEntidad)
    private readonly repository: Repository<ClienteEntidad>,
  ) {}

  async save(professional: Professional): Promise<void> {
    const entidad = new ClienteEntidad();
    entidad.clave = cliente.clave;
    entidad.fechaCreacion = cliente.fechaCreacion;
    entidad.nombre = cliente.nombre;
    await this.repository.save(entidad);
  }
}
