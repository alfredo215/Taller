import { Injectable } from '@nestjs/common';
import { CreateTallerDto } from './dto/create-taller.dto';
import { UpdateTallerDto } from './dto/update-taller.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Empleado } from './interface/taller.interface';

@Injectable()
export class TallerService {

  constructor(@InjectModel('Empleado') private readonly empleadoModel:Model<Empleado>){}


  
    async create(createTallerDto: CreateTallerDto):Promise<Empleado> {
    const nuevo= new this.empleadoModel(CreateTallerDto);
     return await nuevo.save();
  }
  async findAll():Promise<Empleado[]> {
    return await this.empleadoModel.find();
  }

  async findOne(id: string):Promise<Empleado>  {
    return await this.empleadoModel.findOne({_id:id});
  }

  async update(id: string, updateTallerDto: UpdateTallerDto): Promise<Empleado> {
    return this.empleadoModel.findByIdAndUpdate(id, updateTallerDto, { new: true }).exec();
  }
    async remove(id: string): Promise<Empleado> {
      return this.empleadoModel.findByIdAndRemove(id).exec();
    }
  
}
