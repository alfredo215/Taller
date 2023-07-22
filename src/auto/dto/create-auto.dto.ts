
export class CreateAutoDto {
    idAutomovil: number;
    propietario: string;
    marca: string;
    modelo: string;
    anio: number;
    matricula: string;
    diagnostico: string;
    estado: string;
    trabajador: string; // Aquí se almacenará el ObjectId del empleado asociado al automóvil
}