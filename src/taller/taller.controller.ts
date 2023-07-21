import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TallerService } from './taller.service';
import { CreateTallerDto } from './dto/create-taller.dto';
import { UpdateTallerDto } from './dto/update-taller.dto';
import { Empleado } from './interface/taller.interface';

@Controller('taller')
export class TallerController {
  constructor(private readonly tallerService: TallerService) {}

  @Post()
  create(@Body() createTallerDto: CreateTallerDto) {
    return this.tallerService.create(createTallerDto);
  }

  @Get()
  findAll():Promise<Empleado[]> {
    return this.tallerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<Empleado> {
    return this.tallerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTallerDto: UpdateTallerDto):Promise<Empleado> {
    return this.tallerService.update(id, updateTallerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<Empleado> {
    return this.tallerService.remove(id);
  }
  //------------------------------
  
}
