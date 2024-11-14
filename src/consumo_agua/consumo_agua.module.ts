import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { consumo_agua, ConsumoAguaSchema } from './consumo_agua.schema';
import { ConsumoAguaController } from './consumo_agua.controller';
import { ConsumoAguaService } from './consumo_agua.service';

@Module({
  imports: [ MongooseModule.forFeature([{ name: consumo_agua.name, schema: ConsumoAguaSchema}]),],
  controllers: [ConsumoAguaController],
  providers: [ConsumoAguaService]
})
export class ConsumoAguaModule {}
