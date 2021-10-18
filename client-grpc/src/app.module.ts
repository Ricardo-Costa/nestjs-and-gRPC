import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductGrpcClientController } from './products/product-grpc-client/product-grpc-client.controller';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'PRODUCT_PACKAGE',
      transport: Transport.GRPC,
      options: {
        url: 'localhost:50051',
        package: 'product',
        protoPath: `${__dirname}/../proto/product.proto`
      }
    }])
  ],
  controllers: [AppController, ProductGrpcClientController],
  providers: [AppService],
})
export class AppModule {}
