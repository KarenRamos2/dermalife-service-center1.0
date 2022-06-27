import { Module } from '@nestjs/common';
import { DiagnosticsService } from './diagnostics.service';
import { DiagnosticsController } from './diagnostics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientDiagnosis } from './patient.diagnosis';

@Module({
  imports: [TypeOrmModule.forFeature([PatientDiagnosis])],
  providers: [DiagnosticsService],
  controllers: [DiagnosticsController],
})
export class DiagnosticsModule {}
