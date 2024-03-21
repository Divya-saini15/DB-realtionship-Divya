import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, bio, address } = createUserDto;
    return this.usersService.createUser(name, email, bio, address);
  }

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }
}