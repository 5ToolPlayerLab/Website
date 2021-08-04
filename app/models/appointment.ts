import { Type } from 'class-transformer';

export class SchedulingAppointment {
  public readonly uid!: string;

  public readonly title!: string;

  public readonly description!: string;

  public readonly schedulingLink!: string;

  @Type(() => Date)
  public readonly startDate?: Date;

  @Type(() => Date)
  public readonly endDate?: Date;
}
