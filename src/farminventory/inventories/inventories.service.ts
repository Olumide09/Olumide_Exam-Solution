import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoriesService {
  constructor(
    @InjectRepository(Inventory)
    private inventoriesRepository: Repository<Inventory>
  ){}
 async create(createInventoryDto: CreateInventoryDto) {
   const newinventory: Inventory = this.inventoriesRepository.create(createInventoryDto)
   return this.inventoriesRepository.save(newinventory)
  //  return 'This action adds a new inventory';
  }

 async findAll() {
   // return `This action returns all inventories`;
   return await this.inventoriesRepository.find();
  }

  async findOne(id: number) {
   // return `This action returns a #${id} inventory`;
      return await this.inventoriesRepository.findOne(id);
  }

 async update(id: number, updateInventoryDto: UpdateInventoryDto) {
   // return `This action updates a #${id} inventory`;
   return await this.inventoriesRepository.update(id,updateInventoryDto);
  }

 async remove(id: number) {
   // return `This action removes a #${id} inventory`;
   return await this.inventoriesRepository.delete(id);
  }
}
