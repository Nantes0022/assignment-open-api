import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { GroceryController } from './grocery/grocery.controller';
import { GroceryService } from './grocery/grocery.service';
import { McdonaldsService } from './mcdonalds/mcdonalds.service';
import { McDonaldsController } from './mcdonalds/mcdonalds.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, GroceryController, McDonaldsController, ],
  providers: [AppService, GroceryService, McdonaldsService],
})
export class AppModule {}
