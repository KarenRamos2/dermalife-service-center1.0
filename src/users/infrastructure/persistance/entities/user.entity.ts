import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  firstName: string;
  @Column()
  lastNAme: string;
  @Column()
  age: number;
  @Column()
  gender: string;
  @Column()
  role: string;
  @Column()
  password: string;
}
