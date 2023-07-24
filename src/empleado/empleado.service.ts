import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Empleado } from './interface/empleado.interface';

@Injectable()
export class EmpleadoService {

  constructor(@InjectModel('Empleado') private readonly empleadoModel:Model<Empleado>){}


  
    async create(createEmpleadoDto: CreateEmpleadoDto):Promise<Empleado> {
    const nuevo= new this.empleadoModel(createEmpleadoDto);
     return await nuevo.save();
  }
  async findAll():Promise<Empleado[]> {
    return await this.empleadoModel.find();
  }

  async findOne(id: string):Promise<Empleado>  {
    return await this.empleadoModel.findOne({_id:id});
  }

  async update(id: string, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    return this.empleadoModel.findByIdAndUpdate(id, updateEmpleadoDto, { new: true }).exec();
  }
    async remove(id: string): Promise<Empleado> {
      return this.empleadoModel.findByIdAndRemove(id).exec();
    }
  
}
