import { HttpService } from '@nestjs/axios';
export declare class GroceryService {
    private readonly httpService;
    private readonly apiHost;
    private readonly apiKey;
    constructor(httpService: HttpService);
    getGroceryPricing(): Promise<any>;
    getGroceryByName(name: string): Promise<any>;
}
