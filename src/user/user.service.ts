import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
      @InjectModel(User.name) private userModel: Model<User>,
  ) {
  }
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    try {
      return await this.userModel.create( createUserDto );
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const { deletedCount } = await this.userModel.deleteOne({ _id: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`User with id "${ id }" not found`);

    return {message: 'Se elimino con exito!'};
  }

  addCredential(userId: string, credentialId: string) {
    return this.userModel.findByIdAndUpdate(
        userId,
        { $addToSet: { credential: credentialId } },
        { new: true },
    );
  }

  removeCredential(userId: string, credentialId: string) {
    return this.userModel.findByIdAndUpdate(
        userId,
        { $pull: { credential: credentialId } },
        { new: true },
    );
  }
}
