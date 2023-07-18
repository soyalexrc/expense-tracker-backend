import { Module } from '@nestjs/common';
import { TypeOfSourceService } from './type-of-source.service';
import { TypeOfSourceController } from './type-of-source.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {TypeSource, TypeSourceSchema} from "./entities/type-of-source.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{name: TypeSource.name, schema: TypeSourceSchema}])
  ],
  controllers: [TypeOfSourceController],
  providers: [TypeOfSourceService]
})
export class TypeOfSourceModule {}
