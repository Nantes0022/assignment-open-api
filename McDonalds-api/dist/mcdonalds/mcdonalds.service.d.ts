import { HttpService } from '@nestjs/axios';
export declare class McdonaldsService {
    private readonly httpService;
    private readonly apiHost;
    private readonly apiKey;
    constructor(httpService: HttpService);
    getCurrentMenu(): Promise<any>;
    getProductById(productId: string): Promise<any>;
    searchProducts(searchTerm: string, page?: number, pageSize?: number): Promise<any>;
}
