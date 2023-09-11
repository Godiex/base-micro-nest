import { ApiProperty } from '@nestjs/swagger';

export class ProfessionalDto {
  @ApiProperty({ example: 'William' })
  readonly name: string;
  @ApiProperty({ example: 'Smith' })
  readonly firstLastName: string;
  @ApiProperty({ example: 'Jones' })
  readonly secondLastName: string;
  @ApiProperty({ example: 'Neural Medical' })
  readonly position: string;
  @ApiProperty({ example: '57898989' })
  readonly phoneNumber: string;
  @ApiProperty({ example: 'Neural Department' })
  readonly department: string;
  @ApiProperty({ example: 'william.smith@hospital.com' })
  readonly institutionalEmail: string;
  @ApiProperty({ example: '3012343322' })
  readonly contactCellPhone: string;
  @ApiProperty({ example: 'Neural Brain' })
  readonly mainSpecialty: string;
  @ApiProperty({ example: 'Neural Eye' })
  readonly othersSpecialties: string;
  @ApiProperty({ example: 'Engineering of System' })
  readonly otherNonFormalStudies: string;
  @ApiProperty({ example: 'Spanish' })
  readonly languages: string;
  @ApiProperty({ example: 'I am medic and I have a specialty in neural brain' })
  readonly profile: string;
  @ApiProperty({ example: true })
  readonly state: boolean;
}
