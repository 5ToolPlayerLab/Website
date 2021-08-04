import { plainToClass } from 'class-transformer';
import prismic from 'prismic-dom';
import { SchedulingAppointment } from '~/app/models';

export function createAppointmentModel<TObj extends { [prop: string]: any }>(
  document: TObj
) {
  const model: SchedulingAppointment = {
    uid: document.uid,
    title: prismic.RichText.asText(document.data.title),
    description: prismic.RichText.asText(document.data.description),
    schedulingLink: prismic.Link.url(document.data.scheduling_link),
    startDate: document.start_date
      ? prismic.Date(document.data.start_date)
      : undefined,
    endDate: document.end_date
      ? prismic.Date(document.data.end_date)
      : undefined,
  };

  const appointment = plainToClass(SchedulingAppointment, model);
  return appointment;
}
