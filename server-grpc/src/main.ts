import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {

  // http 1.1 server
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // gRPC http 2.0 server
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'product',
      protoPath: `${__dirname}../../proto/product.proto`
    }
  });

}
bootstrap();
