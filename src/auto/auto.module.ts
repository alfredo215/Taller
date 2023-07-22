import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoController } from './auto.controller';
import { Auto } from './schema/auto.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'Auto',schema:Auto}])],
  controllers: [AutoController],
  providers: [AutoService]
})
export class AutoModule {}
