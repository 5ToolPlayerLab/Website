import { Type } from 'class-transformer';
import { CustomTypeIdentifier } from './custom-type-identifier';

export class SchedulingLayout {
  @Type(() => CustomTypeIdentifier)
  public readonly order!: CustomTypeIdentifier[];
}
