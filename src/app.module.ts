import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarminventoryModule } from './farminventory/farminventory.module';

@Module({
  imports: [FarminventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
