import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOfSourceDto } from './create-type-of-source.dto';

export class UpdateTypeOfSourceDto extends PartialType(CreateTypeOfSourceDto) {}
