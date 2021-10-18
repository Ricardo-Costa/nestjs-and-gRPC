import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {

  // http 1.1 server
  const app = await NestFactory.create(AppModule);

  // gRPC http 2.0 server
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'product',
      protoPath: `${__dirname}/../proto/product.proto`
    }
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
