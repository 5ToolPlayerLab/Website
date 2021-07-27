<template>
  <iframe
    :src="iframeUrl"
    title="Schedule Appointment"
    width="100%"
    height="800"
    frameBorder="0"
  ></iframe>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SchedulingFrame',
  setup() {
    const { $config } = useContext();
    const { iframeUrl } = $config.acuityScheduling;
    return { iframeUrl };
  },
});
</script>
