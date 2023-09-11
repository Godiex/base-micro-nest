import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Professional } from '../../../domain/professional/model/professional';

@Entity({ name: 'PROFESSIONAL' })
export class ProfessionalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  firstLastName: string;

  @Column()
  secondLastName: string;

  @Column()
  position: string;

  @Column()
  phoneNumber: string;

  @Column()
  department: string;

  @Column()
  institutionalEmail: string;

  @Column()
  contactCellPhone: string;

  @Column()
  mainSpecialty: string;

  @Column()
  othersSpecialties: string;

  @Column()
  otherNonFormalStudies: string;

  @Column()
  languages: string;

  @Column()
  profile: string;

  @Column()
  state: boolean;

  public mapData(data: Professional) {
    this.name = data.name;
    this.firstLastName = data.firstLastName;
    this.secondLastName = data.secondLastName;
    this.position = data.position;
    this.phoneNumber = data.phoneNumber;
    this.department = data.department;
    this.institutionalEmail = data.institutionalEmail;
    this.contactCellPhone = data.contactCellPhone;
    this.mainSpecialty = data.mainSpecialty;
    this.othersSpecialties = data.othersSpecialties;
    this.otherNonFormalStudies = data.otherNonFormalStudies;
    this.languages = data.languages;
    this.profile = data.profile;
    this.state = data.state;
  }
}
