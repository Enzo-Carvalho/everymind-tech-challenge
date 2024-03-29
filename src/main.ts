import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('EveryMind - desafio')
  .setDescription('CRUD')
  .setContact('Enzo Candido Carvalho', 'https://www.linkedin.com/in/enzo-candido-carvalho/', 'enzo.carvalho10000@gmail.com')
  .setVersion('1.0')
  .build()

const document = SwaggerModule.createDocument(app, config)

SwaggerModule.setup('/swagger', app, document)


  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  })
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();