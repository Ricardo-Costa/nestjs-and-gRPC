import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { ProductDTO } from '../dto/product.dto';

// @Controller('product-grpc-server')
@Controller()
export class ProductGrpcServerController {

    @GrpcMethod('ProductService', 'Create')
    create(data: ProductDTO, metadata: Metadata, call: ServerUnaryCall<ProductDTO>) {
        
        console.log(data, metadata, call);

        // test
        return {
            id: 1,
            ...data
        }
    }

}
