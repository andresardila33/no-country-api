import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UpdateUserDto } from './dto';

@Injectable()
export class AuthService {
  create(createUserDto: CreateUserDto) {
    return { message: 'This action adds a new user' };
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
