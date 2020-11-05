<template>
  <div id="default-layout">
    <c-theme-provider>
      <c-color-mode-provider>
        <c-box font-family="body" as="main">
          <c-reset />
          <v-nav-bar id="navbar" />
          <nuxt />
          <v-footer />
        </c-box>
      </c-color-mode-provider>
    </c-theme-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import VFooter from '~/components/modules/layout/the-footer.vue';
import VNavBar from '~/components/modules/layout/the-navbar.vue';

export default defineComponent({
  name: 'AppLayout',
  components: {
    VFooter,
    VNavBar,
  },
});
</script>

<style lang="scss" scoped>
#default-layout {
  #navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
