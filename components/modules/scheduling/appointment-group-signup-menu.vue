<template>
  <v-menu>
    Sign Up
    <template #items>
      <c-menu-item
        v-for="(entry, index) of appointment.schedulingLinks"
        :key="index"
      >
        <c-link color="black" is-external :href="entry.schedulingLink">{{
          entry.name
        }}</c-link>
      </c-menu-item>
    </template>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { SchedulingAppointmentGroup } from '~/app/models';
import VMenu from '~/components/ui/menu/menu.vue';

export default defineComponent({
  name: 'AppointmentGroupSignUpMenu',
  components: { VMenu },
  props: {
    appointment: {
      type: Object as PropType<SchedulingAppointmentGroup>,
      required: true,
    },
  },
  setup(props, context) {
    return {};
  },
});
</script>
