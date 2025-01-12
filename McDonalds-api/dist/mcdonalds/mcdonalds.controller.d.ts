import { McdonaldsService } from './mcdonalds.service';
export declare class McDonaldsController {
    private readonly mcdonaldsService;
    constructor(mcdonaldsService: McdonaldsService);
    getCurrentMenu(): Promise<any>;
    getProductById(id: string): Promise<any>;
    searchProducts(searchTerm: string, page?: number, pageSize?: number): Promise<any>;
}
