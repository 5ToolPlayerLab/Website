<template>
  <c-flex
    as="nav"
    :direction="['column', 'row']"
    align="center"
    justify="space-between"
    :mb="['80px', '130px']"
  >
    <c-box id="header-left-box"></c-box>
    <c-box id="header-center-box">
      <c-box id="nav-logo">
        <img
          src="~/assets/images/brand/5T Diamond.svg"
          alt="5 Tool Player Lab logo"
        />
      </c-box>
    </c-box>
    <c-stack id="header-right-box" align="center" spacing="0">
      <c-text
        id="email-label"
        color="#f3e900"
        font-size="md"
        text-transform="uppercase"
        letter-spacing="2px"
        >For questions email us at<span class="sr-only"
          >nick@5toolplayerlab.com</span
        ></c-text
      >
      <c-link
        href="mailto:nick@5toolplayerlab.com"
        letter-spacing="3px"
        font-weight="400"
        aria-describedby="email-label"
        >nick@5toolplayerlab.com</c-link
      >
    </c-stack>
  </c-flex>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'AppNavBar',
});
</script>

<style lang="scss" scoped>
nav {
  min-height: 120px;
  width: 100%;
  position: relative;
  padding: 0 40px;

  #nav-logo {
    padding: 10px;
    background: radial-gradient(
      circle,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 1) 20%,
      rgba(255, 255, 255, 0) 00%
    );
    display: grid;
    place-items: center;

    @include window-xs {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    img {
      height: 80px;
      width: auto;
    }
  }
}
</style>
