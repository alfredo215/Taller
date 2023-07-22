import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TallerModule } from './taller/taller.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoModule } from './auto/auto.module';

@Module({
  imports: [TallerModule,
    MongooseModule.forRoot('mongodb+srv://apiagenda:Prueba2023@cluster0.7yji9px.mongodb.net/?retryWrites=true&w=majority'),
    AutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
