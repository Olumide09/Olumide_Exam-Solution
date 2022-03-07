import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarminventoryModule } from './farminventory/farminventory.module';

@Module({
  imports: [TypeOrmModule.forRoot(),FarminventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
