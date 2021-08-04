import { Type } from 'class-transformer';

export class AppointmentGroupSchedulingEntry {
  public readonly name!: string;

  public readonly schedulingLink!: string;

  @Type(() => Date)
  public readonly startDate?: Date;
}

export class SchedulingAppointmentGroup {
  public readonly uid!: string;

  public readonly title!: string;

  public readonly description!: string;

  @Type(() => AppointmentGroupSchedulingEntry)
  public readonly schedulingLinks!: AppointmentGroupSchedulingEntry[];
}
