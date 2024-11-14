import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class consumo_agua extends Document {
    @Prop ({ required: true})
    usuarioId: string;

    @Prop ({ required: true})
    quantidade: number; 

    @Prop ({required: true})
    dataLeitura: Date;
}

export const ConsumoAguaSchema = SchemaFactory.createForClass(consumo_agua);