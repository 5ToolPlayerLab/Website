<template>
  <v-button
    as="a"
    variant="solid"
    :href="appointment.schedulingLink"
    target="_blank"
    v-bind="$attrs"
    v-on="$listeners"
    >Sign Up</v-button
  >
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { SchedulingAppointment } from '~/app/models';
import VButton from '~/components/ui/button/button.vue';

export default defineComponent({
  name: 'AppointmentSignUpButton',
  components: { VButton },
  props: {
    appointment: {
      type: Object as PropType<SchedulingAppointment>,
      required: true,
    },
  },
});
</script>
