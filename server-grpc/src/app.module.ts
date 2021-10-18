import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductGrpcServerController } from './products/product-grpc-server/product-grpc-server.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductGrpcServerController],
  providers: [AppService],
})
export class AppModule {}
