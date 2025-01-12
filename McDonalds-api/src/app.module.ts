import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { McdonaldsService } from './mcdonalds/mcdonalds.service';
import { McDonaldsController } from './mcdonalds/mcdonalds.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, McDonaldsController, ],
  providers: [AppService, McdonaldsService],
})
export class AppModule {}
