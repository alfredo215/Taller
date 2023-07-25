import { ApiProperty } from "@nestjs/swagger";


export class CreateEmpleadoDto {
    @ApiProperty({
        description: 'el id del Empleado',
        type: Number
      })
    idEmpleado: number;
//------------------------------------
@ApiProperty({
    description: 'nombre del empleado',
    type: String
  })
    nombre: string;
//----------------------------
@ApiProperty({
    description: 'telefono del empleado',
    type: Number
  })
    telefono: number;
//---------------------------------
@ApiProperty({
    description: 'documento de identificacion del empleado',
    type: Number
  })
    dui:number;
}
