import { Module } from '@nestjs/common';
import { ProfessionalProviderModule } from './provider/professional-provider.module';

@Module({
  imports: [ProfessionalProviderModule],
})
export class ProfessionalModule {}
