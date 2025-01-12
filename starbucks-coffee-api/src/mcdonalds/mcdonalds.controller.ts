import { Controller } from '@nestjs/common';
import { Get, Param, Query } from '@nestjs/common/decorators';
import { McdonaldsService } from './mcdonalds.service';

@Controller('mcdonalds')
export class McDonaldsController {
  constructor(private readonly mcdonaldsService: McdonaldsService) {}

  @Get('currentMenu')
  async getCurrentMenu() {
    return this.mcdonaldsService.getCurrentMenu();
  }

  @Get('product/:id')
  async getProductById(@Param('id') id: string) {
    return this.mcdonaldsService.getProductById(id);
  }

  @Get('search')
  async searchProducts(
    @Query('search_term') searchTerm: string,
    @Query('page') page: number = 1,
    @Query('page_size') pageSize: number = 30,
  ) {
    return this.mcdonaldsService.searchProducts(searchTerm, page, pageSize);
  }
}
