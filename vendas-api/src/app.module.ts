import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://gadsdev:a123456@ds153314.mlab.com:53314/vendas'
    , { useNewUrlParser : true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
