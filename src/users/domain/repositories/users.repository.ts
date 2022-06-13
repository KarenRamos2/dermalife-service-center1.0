import { User } from '../entities/user.model';

export interface UsersRepository {
  findAll(): Promise<User[]>;
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  update(id: number, user: User): Promise<User>;
  delete(id: number): Promise<User>;
}
