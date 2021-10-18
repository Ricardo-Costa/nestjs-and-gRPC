import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';

// @Controller('product-grpc-server')
@Controller()
export class ProductGrpcServerController {

    @GrpcMethod('ProductService', 'Create')
    create(data: any, metadata: Metadata, call: ServerUnaryCall<any>) {
        console.log(data);
        // test
        return {
            id: 1,
            ...data
        }
    }

}
