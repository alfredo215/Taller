import * as mongoose from 'mongoose'


export const Empleado = new mongoose.Schema({

    idEmpleado: Number,   
    nombre: String,
    telefono: Number,
    dui:Number,
   
});