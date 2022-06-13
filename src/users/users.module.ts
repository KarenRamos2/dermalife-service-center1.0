import { Module } from '@nestjs/common';
import { UsersService } from './domain/services/users.service';
import { UsersController } from './interface/rest/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/persistance/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
