import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { MedicsModule } from './medics/medics.module';
import { DiagnosticsModule } from './diagnostics/diagnostics.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PatientsModule,
    MedicsModule,
    DiagnosticsModule,
    AppointmentsModule,
    ProfileModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
