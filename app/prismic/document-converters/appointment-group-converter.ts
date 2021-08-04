import { plainToClass } from 'class-transformer';
import prismic from 'prismic-dom';
import {
  SchedulingAppointmentGroup,
  AppointmentGroupSchedulingEntry,
} from '~/app/models';

export function createAppointmentGroupModel<
  TObj extends { [prop: string]: any }
>(document: TObj) {
  const model: SchedulingAppointmentGroup = {
    uid: document.uid,
    title: prismic.RichText.asText(document.data.title),
    description: prismic.RichText.asText(document.data.description),
    schedulingLinks: (document.data.scheduling_links as any[]).map<
      AppointmentGroupSchedulingEntry
    >((data) => {
      return {
        name: prismic.RichText.asText(data.name),
        schedulingLink: prismic.Link.url(data.scheduling_link),
        startDate: data.start_date ? prismic.Date(data.start_date) : undefined,
      };
    }),
  };

  const appointmentGroup = plainToClass(SchedulingAppointmentGroup, model);
  return appointmentGroup;
}
