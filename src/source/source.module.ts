import { Module } from '@nestjs/common';
import { SourceService } from './source.service';
import { SourceController } from './source.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Source, SourceSchema} from "./entities/source.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Source.name, schema: SourceSchema}])
  ],
  controllers: [SourceController],
  providers: [SourceService]
})
export class SourceModule {}
