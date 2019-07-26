import { Module } from '@nestjs/common';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerSchema } from './seller.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Seller', schema: SellerSchema}])
  ],
  controllers: [SellersController],
  providers: [SellersService]
})
export class SellersModule {}
