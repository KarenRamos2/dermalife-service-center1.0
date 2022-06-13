import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UsersService } from '../../domain/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getAllUsers() {
    const users = await this.userService.getAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successful',
      users,
    };
  }
}
