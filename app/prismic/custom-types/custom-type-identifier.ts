import { Expose } from 'class-transformer';

export class CustomTypeIdentifier {
  @Expose({ name: 'type_id' })
  public readonly typeId!: string;
}
