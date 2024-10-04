import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './entity.ts/Users';
import { RequestUserDto } from './dtos/request-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async findAll() {
    this.logger.log('Fetching all users...');
    return await this.UserRepository.find();
  }

  async findOne(id: number) {
    this.logger.log(`Get user with ID: ${id}`);
    return await this.UserRepository.findOneBy({ id });
  }

  async create(createUserDto: RequestUserDto) {
    this.logger.log('Create a new user...');
    const newUser = this.UserRepository.create(createUserDto);
    const savedUser = await this.UserRepository.save(newUser);

    return savedUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    this.logger.log(`Updating user with ID: ${id}`);
    await this.UserRepository.update(id, updateUserDto);
    const updatedUser = await this.UserRepository.findOne({ where: { id } });

    return updatedUser;
  }

  async delete(id: number) {
    this.logger.log(`Deleting user with ID: ${id}`);
    await this.UserRepository.delete(id);
    this.logger.log(`User with ID: ${id} successfully deleted.`);
  }
}
