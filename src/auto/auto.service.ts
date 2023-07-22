import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auto } from './interface/auto.interface';

@Injectable()
export class AutoService {

  constructor(@InjectModel('Auto') private readonly autoModel:Model<Auto>){}


  
    async create(createTallerDto: CreateAutoDto):Promise<Auto> {
    const nuevo= new this.autoModel(CreateAutoDto);
     return await nuevo.save();
  }
  async findAll():Promise<Auto[]> {
    return await this.autoModel.find();
  }

  async findOne(id: string):Promise<Auto>  {
    return await this.autoModel.findOne({_id:id});
  }

  async update(id: string, updateAutoDto: UpdateAutoDto): Promise<Auto> {
    return this.autoModel.findByIdAndUpdate(id, updateAutoDto, { new: true }).exec();
  }
    async remove(id: string): Promise<Auto> {
      return this.autoModel.findByIdAndRemove(id).exec();
    }
  
}