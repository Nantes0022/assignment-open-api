import { GroceryService } from './grocery.service';
export declare class GroceryController {
    private readonly groceryService;
    constructor(groceryService: GroceryService);
    getGroceryPricing(): Promise<any>;
    getGroceryByName(name: string): Promise<any>;
}
