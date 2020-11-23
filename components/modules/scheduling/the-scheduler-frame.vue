<template>
  <iframe
    src="https://app.acuityscheduling.com/schedule.php?owner=21282000"
    title="Schedule Appointment"
    width="100%"
    height="800"
    frameBorder="0"
  ></iframe>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SchedulingFrame',
  setup() {
    return {};
  },
});
</script>
