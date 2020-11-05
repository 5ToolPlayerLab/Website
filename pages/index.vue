<template>
  <c-box class="home-page">
    <v-header />
  </c-box>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import VHeader from '~/components/modules/home/the-header.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    VHeader,
  },
});
</script>
