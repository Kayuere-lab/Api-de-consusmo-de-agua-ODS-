import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';

@Module({
  imports: [ConsumoAguaModule, MongooseModule.forRoot("mongodb+srv://AlexandreHenrique:alexnerd10@webmobile-a7.o5qlu.mongodb.net/")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
