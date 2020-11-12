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
        ><span style="color: #89d454">5T</span>ool Player Lab</c-heading
      >
      <c-text id="pay-now-label" font-size="2xl" letter-spacing="2px" mb="2"
        >Looking to pay for a session?</c-text
      >
      <v-button
        as="a"
        :href="venmoLink"
        variant="outline"
        @click.prevent="goToVenmo"
        >Pay Here</v-button
      >
    </c-box>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import isMobile from 'ismobilejs';
import VButton from '~/components/ui/button/button.vue';

export default defineComponent({
  name: 'HomePageHeader',
  components: {
    VButton,
  },
  setup() {
    const venmoLink = 'https://venmo.com/lab5t';
    const appleDeepLink = 'venmo://users/92997158';
    const androidDeepLink =
      'intent://venmo.com/lab5t#Intent;package=com.venmo;scheme=https;end';

    const goToVenmo = () => {
      const isApple = isMobile(window.navigator).apple.device;
      const isAndroid = isMobile(window.navigator).android.device;
      const fallbackToWebLink = () =>
        setTimeout(() => (window.location.href = venmoLink), 1000);

      if (isApple) {
        window.location.href = appleDeepLink;
        fallbackToWebLink();
      } else if (isAndroid) {
        window.location.href = androidDeepLink;
        fallbackToWebLink();
      } else window.location.href = venmoLink;
    };
    return { venmoLink, goToVenmo };
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
