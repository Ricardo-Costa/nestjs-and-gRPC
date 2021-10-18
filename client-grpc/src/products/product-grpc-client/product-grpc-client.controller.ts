import { Body, Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface ProductGrpcService {
    create(data: { name: string, price: number }): Observable<any>;
    findAll(data: {}): Observable<any>;
}

@Controller('product-grpc-client')
export class ProductGrpcClientController implements OnModuleInit {

    private productGrpcService: ProductGrpcService;

    constructor(@Inject('PRODUCT_PACKAGE') private client: ClientGrpc) {}

    onModuleInit() {
        this.productGrpcService =
            this.client.getService<ProductGrpcService>('ProductService');
    }

    @Post()
    async create(@Body() data) {
        try {
            return await this.productGrpcService.create(data).toPromise();
        } catch (e) {
            throw new RpcException({ code: e.code, message: e.message });
        }
    }

    @Get()
    findAll(@Body() data) {
        return this.productGrpcService.findAll(data).toPromise();
    }

}
