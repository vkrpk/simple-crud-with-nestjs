import { Injectable } from '@nestjs/common';
import { User, UserDocument } from "./user.model";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  create(user: User): Promise<User> {
    return this.userModel.create(user);
  }

  findAll(): Promise<User[]> {
    return  this.userModel.find();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user);
  }

  remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
