import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TallerModule } from './taller/taller.module';

@Module({
  imports: [TallerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
