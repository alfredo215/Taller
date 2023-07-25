import { ApiProperty } from "@nestjs/swagger";

export class CreateAutoDto {

    @ApiProperty({
        description: 'el id del Propietario',
        type: Number
      })
    idAutomovil: number;
//----------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'el Nombre del Propietario',
        type: String
      })
    propietario: string;
//----------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'marca del automovil',
        type: String
      })
    marca: string;
//-----------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'modelo del automovil',
        type: String
      })
    modelo: string;
//---------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'año de emision del automovil',
        type: Number
      })
    anio: number;
//-------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'matricula del automovil',
        type: String
      })
    matricula: string;
//-----------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'diagnostico del problema',
        type: String
      })
    diagnostico: string;
//----------------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'si el auto esta reparado o en reparacion',
        type: String
      })
    estado: string;
    //-------------------------------------------------------------------------------------------
    @ApiProperty({
        description: 'el empleado encargado de reparar el automovil',
        type: String
      })
    trabajador: string; // Aquí se almacenará el ObjectId del empleado asociado al automóvil
}