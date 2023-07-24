import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { Empleado } from './schema/empleado.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'Empleado',schema:Empleado}])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService]
})
export class EmpleadoModule {}
