import { Entity } from 'typeorm';
@Entity('diagnostics')
export class PatientDiagnosis {
  id: number;
  images: undefined;
  imageType: string;
  severity: string;
}
