<template>
  <c-box class="home-page">
    <v-header />
    <c-flex direction="column" align-items="center" p="8">
      <c-box id="book-now" as="a" d="flex" pt="8">
        <c-heading class="accent" line-height="1">Book Now</c-heading>
      </c-box>
      <v-scheduling-frame />
    </c-flex>
  </c-box>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import VHeader from '~/components/modules/home/the-header.vue';
import VSchedulingFrame from '~/components/modules/scheduling/the-scheduler-frame.vue';

export default defineComponent({
  name: 'HomePage',
  head: {
    script: [
      {
        src: 'https://embed.acuityscheduling.com/js/embed.js',
        type: 'text/javascript',
        hid: 'scheduler',
        defer: true,
      },
    ],
  },
  components: {
    VHeader,
    VSchedulingFrame,
  },
});
</script>
