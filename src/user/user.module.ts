import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }])],

  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
