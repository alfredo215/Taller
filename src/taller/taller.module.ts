import { Module } from '@nestjs/common';
import { TallerService } from './taller.service';
import { TallerController } from './taller.controller';
import { Empleado } from './schema/taller.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'Empleado',schema:Empleado}])],
  controllers: [TallerController],
  providers: [TallerService]
})
export class TallerModule {}
