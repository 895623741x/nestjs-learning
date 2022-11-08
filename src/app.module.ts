import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://895623741x:895623741c@api.pvt83fk.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
