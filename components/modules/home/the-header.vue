<template>
  <header>
    <c-box as="section" :px="['20px', '100px']">
      <c-text
        text-transform="uppercase"
        letter-spacing="2px"
        line-height="1"
        border-left="3px solid #f3e900"
        pl="2"
        >Now accepting bookings</c-text
      >
      <c-heading :font-size="['4rem', '6rem']" letter-spacing="3px"
        ><span style="color: #89d454">5</span> Tool Player Lab</c-heading
      >
      <c-text id="pay-now-label" font-size="2xl" letter-spacing="2px" mb="2"
        >Looking to pay for a session?</c-text
      >
      <v-button as="a" href="https://venmo.com/lab5t" variant="outline"
        >Pay Here</v-button
      >
    </c-box>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import VButton from '~/components/ui/button/button.vue';

export default defineComponent({
  name: 'HomePageHeader',
  components: {
    VButton,
  },
});
</script>

<style lang="scss" scoped>
header {
  background: url('~assets/images/5T Header BG2.png') no-repeat center center
    fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding-top: 250px;
}
</style>
