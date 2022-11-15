import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async addUser(CreateUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await new this.userModel(CreateUserDTO);
    console.log(newUser);
    return newUser.save();
  }

  async getUser(email): Promise<User> {
    const user = await this.userModel.findById(email).exec();
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    console.log(users);
    return users;
  }

  async editUser(email, CreateUserDTO: CreateUserDTO): Promise<User> {
    const editedUser = await this.userModel.findByIdAndUpdate(
      email,
      CreateUserDTO,
      { new: true },
    );
    return editedUser;
  }
  async deleteUser(email): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(email);
    return deletedUser;
  }
}
