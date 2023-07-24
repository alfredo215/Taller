import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoModule } from './auto/auto.module';
import { EmpleadoModule } from './empleado/empleado.module';

@Module({
  imports: [AutoModule,
    MongooseModule.forRoot('mongodb+srv://apiagenda:Prueba2023@cluster0.7yji9px.mongodb.net/?retryWrites=true&w=majority'),
    EmpleadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
