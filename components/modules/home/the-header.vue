<template>
  <header>
    <c-box as="section" :px="['20px', '100px']">
      <c-text class="accent">Now accepting bookings</c-text>
      <c-heading :font-size="['4rem', '6rem']" letter-spacing="3px"
        ><span style="color: #89d454">5T</span>ool Player Lab</c-heading
      >
      <c-text id="pay-now-label" font-size="2xl" letter-spacing="2px" mb="2"
        >Looking to book or pay for a session?</c-text
      >
      <c-stack :spacing="4" is-inline>
        <v-button as="a" href="#book-now" variant="solid">Book Now</v-button>
        <v-button as="a" :href="memberSignUpUrl" variant="solid"
          >Member Sign Up</v-button
        >
        <v-button as="a" :href="paymentLinkUrl" variant="outline"
          >Pay Here</v-button
        >
      </c-stack>
    </c-box>
  </header>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import VButton from '~/components/ui/button/button.vue';

export default defineComponent({
  name: 'HomePageHeader',
  components: {
    VButton,
  },
  setup() {
    const { $config } = useContext();
    const { memberSignUpUrl } = $config.acuityScheduling;
    const { paymentLinkUrl } = $config.stripe;

    return { memberSignUpUrl, paymentLinkUrl };
  },
});
</script>

<style lang="scss" scoped>
header {
  background: url('~assets/images/5T Header BG New.png') no-repeat center center
    fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding-top: 250px;
}
</style>
