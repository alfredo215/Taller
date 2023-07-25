import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Administracion de taller automotriz - API')
    .setDescription('Taller automotriz eclipse donde trabajan los verdaderos expertos')
    .setVersion('1.0')
    .addTag('Taller eclipse API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(3000);
}
bootstrap();
