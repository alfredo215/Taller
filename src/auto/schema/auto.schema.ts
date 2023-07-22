import * as mongoose from 'mongoose'
const Schema = mongoose.Schema;


export const Auto = new mongoose.Schema({

    idAutomovil: Number,   
    propietario: String,
    marca: String,
    modelo:String,
    anio: Number,
    matricula: String,
    diagnostico: String,
    estado: String,
    trabajador: {
        type: Schema.Types.ObjectId,
        ref: 'Empleado' // Aquí se especifica el nombre del modelo "Empleado"
      }
   
});