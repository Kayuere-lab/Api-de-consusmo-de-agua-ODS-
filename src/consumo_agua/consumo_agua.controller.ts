import { Controller, Post, Body } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';
import { ConsumoAguaDto } from './consumo_agua.dto';

@Controller('consumo-agua')
export class ConsumoAguaController {
    constructor(private readonly consumoService: ConsumoAguaService) {}

    @Post('registrar')
    async registrarConsumo(@Body() consumoDto: ConsumoAguaDto) {
        return this.consumoService;this.registrarConsumo(consumoDto);
    }

}
