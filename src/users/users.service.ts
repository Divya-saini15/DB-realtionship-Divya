import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Profile) private profilesRepository: Repository<Profile>,
  ) {}

  async createUser(name: string, email: string, bio: string, address: string) {
    const profile = this.profilesRepository.create({ bio, address });
    const user = this.usersRepository.create({ name, email, profile });
    return this.usersRepository.save(user);
  }

  async getUsers() {
    return this.usersRepository.find({ relations: ['profile'] });
  }
}