<template>
  <c-box class="home-page">
    <v-header />
    <c-flex direction="column" align-items="center" p="8">
      <c-box id="book-now" as="a" d="flex" pt="8" mb="8">
        <c-heading class="accent" line-height="1">Book Now</c-heading>
      </c-box>
      <c-box max-w="800px">
        <v-scheduling-list
          :order="typeIdOrder"
          :appointments="appointments"
          :appointment-groups="appointmentGroups"
        />
      </c-box>
      <c-box id="schedule" as="a" d="flex" pt="8" mb="8">
        <c-heading as="h3" class="accent" line-height="1"
          >Full Schedule</c-heading
        >
      </c-box>
      <v-scheduling-frame />
    </c-flex>
  </c-box>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import { plainToClass } from 'class-transformer';
import {
  SchedulingAppointment,
  SchedulingAppointmentGroup,
} from '~/app/models';
import { SchedulingLayout } from '~/app/prismic/custom-types/scheduling-layout';
import { createAppointmentModel } from '~/app/prismic/document-converters/appointment-converter';
import { createAppointmentGroupModel } from '~/app/prismic/document-converters/appointment-group-converter';
import VHeader from '~/components/modules/home/the-header.vue';
import VSchedulingList from '~/components/modules/scheduling/the-scheduling-list.vue';
import VSchedulingFrame from '~/components/modules/scheduling/the-scheduler-frame.vue';

declare module '@nuxt/types' {
  interface Context {
    $prismic: any;
  }
}

export default defineComponent({
  name: 'HomePage',
  head: {},
  components: {
    VHeader,
    VSchedulingList,
    VSchedulingFrame,
  },
  setup() {
    const { $config } = useContext();
    const { embedScriptUrl } = $config.acuityScheduling;

    useMeta({
      script: [
        {
          src: embedScriptUrl,
          type: 'text/javascript',
          hid: 'scheduler',
          defer: true,
        },
      ],
    });

    return { embedScriptUrl };
  },
  async asyncData({ $prismic }) {
    // resolve appointment order
    const schedulingLayoutType = await $prismic.api.getSingle(
      'scheduling_layout'
    );
    const schedulingLayout = plainToClass(
      SchedulingLayout,
      schedulingLayoutType.data
    );

    const typeIdOrder = schedulingLayout.order.map(({ typeId }) => typeId);
    const { predicates } = $prismic;

    // fetch appointment doc types
    const appointmentTypes = await $prismic.api.query(
      predicates.at('document.type', 'appointment')
    );
    const appointmentGroupTypes = await $prismic.api.query(
      predicates.at('document.type', 'appointment_group')
    );

    // map appointment document uids
    const appointmentUids = appointmentTypes.results?.map(
      ({ uid }: { uid: string }) => uid
    );
    const appointmentGroupUids = appointmentGroupTypes.results?.map(
      ({ uid }: { uid: string }) => uid
    );

    // fetch appointment data
    const appointments: SchedulingAppointment[] = [];
    for (const uid of appointmentUids) {
      const appointmentDoc = await $prismic.api.getByUID('appointment', uid);
      const appointment = createAppointmentModel(appointmentDoc);
      appointments.push(appointment);
    }

    // fetch appointmetn group data
    const appointmentGroups: SchedulingAppointmentGroup[] = [];
    for (const uid of appointmentGroupUids) {
      const appointmentDoc = await $prismic.api.getByUID(
        'appointment_group',
        uid
      );
      const appointmentGroup = createAppointmentGroupModel(appointmentDoc);
      appointmentGroups.push(appointmentGroup);
    }

    return {
      typeIdOrder,
      appointments,
      appointmentGroups,
    };
  },
});
</script>
