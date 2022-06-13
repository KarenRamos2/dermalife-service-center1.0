import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../infrastructure/persistance/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from '../../application/transform/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }

  async create(data: UserDto) {
    const user = this.userRepository.create(data);
    await this.userRepository.save(data);
    return user;
  }

  async getByEmail(email: string): Promise<UserDto> {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  async getById(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<UserDto>) {
    await this.userRepository.update({ id }, data);
    return await this.userRepository.findOne({ id });
  }

  async delete(id: number) {
    await this.userRepository.delete({ id });
    return { deleted: true };
  }
}
