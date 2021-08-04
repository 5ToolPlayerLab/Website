<template>
  <c-stack :spacing="6">
    <c-box v-for="entry in sortedAppointments" :key="entry.uid">
      <c-flex>
        <c-heading as="h3" mr="4" color="#89d454">{{ entry.title }}</c-heading>
        <component :is="resolveSignUpComponent(entry)" :appointment="entry" />
      </c-flex>
      <c-text font-size="lg">{{ entry.description }}</c-text>
    </c-box>
  </c-stack>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import {
  SchedulingAppointment,
  SchedulingAppointmentGroup,
} from '~/app/models';
import AppointmentSignUpButton from '~/components/modules/scheduling/appointment-signup-button.vue';
import AppointmentGroupSignUpMenu from '~/components/modules/scheduling/appointment-group-signup-menu.vue';

export default defineComponent({
  name: 'TheSchedulingList',
  props: {
    appointments: {
      type: Array as PropType<SchedulingAppointment[]>,
      required: true,
    },
    appointmentGroups: {
      type: Array as PropType<SchedulingAppointmentGroup[]>,
      required: true,
    },
    order: {
      type: Array as PropType<string[]>,
      required: false,
      default: [],
    },
  },
  setup(props, context) {
    const { order, appointments, appointmentGroups } = props;

    const sortedAppointments = [...appointments, ...appointmentGroups];
    sortedAppointments.sort((a, b) => {
      return order.indexOf(a.uid) - order.indexOf(b.uid);
    });

    const resolveSignUpComponent = (
      obj: SchedulingAppointment | SchedulingAppointmentGroup
    ) =>
      'schedulingLink' in obj
        ? AppointmentSignUpButton
        : AppointmentGroupSignUpMenu;

    return { sortedAppointments, resolveSignUpComponent };
  },
});
</script>
