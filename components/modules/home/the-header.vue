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
        @click.prevent="goToVenmo()"
        >Pay Here</v-button
      >
    </c-box>
  </header>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import isMobile from 'ismobilejs';
import VButton from '~/components/ui/button/button.vue';
import { useDeepLink } from '~/app/utils/deep-link';

export default defineComponent({
  name: 'HomePageHeader',
  components: {
    VButton,
  },
  setup() {
    const { $config } = useContext();
    const venmoLink = $config.venmo.url;
    const appleDeepLink = $config.venmo.appleDeepLink;
    const androidDeepLink = $config.venmo.androidDeepLink;

    const { gotToDeepLink } = useDeepLink(venmoLink);

    const goToVenmo = () => {
      const isApple = isMobile(window.navigator).apple.device;
      const isAndroid = isMobile(window.navigator).android.device;

      if (isApple) gotToDeepLink(appleDeepLink);
      else if (isAndroid) gotToDeepLink(androidDeepLink);
      else window.location.href = venmoLink;
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
