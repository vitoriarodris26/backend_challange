import { Injectable, Logger  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './entity.ts/Users';
import { RequestUserDto } from './dtos/request-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,

  ) {}

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: number) {
    return this.UserRepository.findOneBy({ id });
  }

  async create(createUserDto: RequestUserDto) {
    const newUser = this.UserRepository.create(createUserDto);
    return await this.UserRepository.save(newUser);
  }

  
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.UserRepository.update(id, updateUserDto);
    const updatedUser = await this.UserRepository.findOne({ where: { id } });
    return updatedUser;
  }
  delete(id: number) {
    this.UserRepository.delete(id);
  }
}
