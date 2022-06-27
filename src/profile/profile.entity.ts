import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class ProfileEntity {}
@Entity('users')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descripcion: string;
  @Column()

}
