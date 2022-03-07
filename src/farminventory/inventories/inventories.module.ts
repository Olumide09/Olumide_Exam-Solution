import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoriesService } from './inventories.service';
import { InventoriesController } from './inventories.controller';
import { FarminventoryModule } from '../farminventory.module';
@Module({
  imports: [TypeOrmModule.forRoot(), FarminventoryModule],
  controllers: [InventoriesController],
  providers: [InventoriesService]
})
export class InventoriesModule {}
