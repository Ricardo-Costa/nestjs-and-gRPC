import { status } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
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

    @GrpcMethod('ProductService')
    findAll(data) {
        let responseData = [
            {
                id: 1,
                name: 'ProductX',
                price: 344.56
            }
        ]
        // test
        return { data: responseData }
    }

    @GrpcMethod('ProductService', 'Delete')
    remove(data) {
        try {

            return true

        } catch (e) {
            // if (e instanceof EntityNotfoundError) {
            //     throw new RpcException({
            //         message: 'Product not found.'
            //         code: status.NOT_FOUND
            //     });
            // }
        }
    }

}
