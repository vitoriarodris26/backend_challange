import { Controller, Get, Post, Body, Param, Delete, Put, Patch, NotFoundException } from '@nestjs/common';
import Users from './entity.ts/Users';
import { UserService } from './users.service';
import User from './entity.ts/Users';
import { UpdateUserDto } from './dtos/update-user.dto';
import { RequestUserDto } from './dtos/request-user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({ status: 200, description: 'List of users successfully returned.' })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the user' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: RequestUserDto })
  @Post('/create')
  async create(@Body() createUserDto: RequestUserDto) {
   const createUser =  await this.userService.create(createUserDto);
   return createUser;
  }
  
  @ApiOperation({ summary: 'Update an existing user' }) 
  @ApiParam({ name: 'id', description: 'The ID of the user to update' })
  @ApiBody({ type: UpdateUserDto }) 
  @ApiResponse({ status: 200, description: 'User successfully updated.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    const user = await this.userService.update(id, updateUserDto);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @ApiOperation({ summary: 'Delete a user by ID' }) 
  @ApiParam({ name: 'id', description: 'The ID of the user to delete' }) 
  @ApiResponse({ status: 200, description: 'User successfully deleted.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
