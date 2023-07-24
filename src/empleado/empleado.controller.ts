import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './interface/empleado.interface';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadoService.create(createEmpleadoDto);
  }

  @Get()
  findAll():Promise<Empleado[]> {
    return this.empleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<Empleado> {
    return this.empleadoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto):Promise<Empleado> {
    return this.empleadoService.update(id, updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<Empleado> {
    return this.empleadoService.remove(id);
  }
}
