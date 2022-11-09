import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    this.userRepository.save(user);
    return user;
  }

  findAll() {
    return { message: `This action returns all user` };
  }

  findOne(id: string) {
    return { message: `This action returns a #${id} user` };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return { message: `This action updates a #${id} user` };
  }

  remove(id: string) {
    return { message: `This action removes a #${id} user` };
  }
}
