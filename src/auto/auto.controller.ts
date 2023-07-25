import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutoService } from './auto.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './interface/auto.interface';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags("Operaciones CRUD Auto")
@Controller('auto')
export class AutoController {
  constructor(private readonly autoService: AutoService) {}


  @ApiBody({ type: [CreateAutoDto] })
  @Post()
  create(@Body() createAutoDto: CreateAutoDto) {
    return this.autoService.create(createAutoDto);
  }

  @Get()
  findAll():Promise<Auto[]> {
    return this.autoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<Auto> {
    return this.autoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoDto: UpdateAutoDto):Promise<Auto> {
    return this.autoService.update(id, updateAutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<Auto> {
    return this.autoService.remove(id);
  }
  //------------------------------
  
}