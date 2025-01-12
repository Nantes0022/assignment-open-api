import { Controller } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('grocery')
export class GroceryController {
    constructor(private readonly groceryService: GroceryService) {}

    // Fetch the full list of groceries
    @Get('pricing')
    async getGroceryPricing() {
      return this.groceryService.getGroceryPricing();
    }
  
    // Fetch a single grocery item by name
    @Get('pricing/:name')
    async getGroceryByName(@Param('name') name: string) {
      return this.groceryService.getGroceryByName(name);
    }
}
