<template>
  <c-menu v-slot="{ isOpen }">
    <c-menu-button
      v-chakra="variantStyles[variant]"
      :is-active="isOpen"
      :right-icon="isOpen ? 'chevron-up' : 'chevron-down'"
      border-radius="0"
      letter-spacing="2px"
    >
      <slot />
    </c-menu-button>
    <c-menu-list>
      <slot name="items" />
    </c-menu-list>
  </c-menu>
  <!-- <c-button
    v-chakra="variantStyles[variant]"
    border-radius="0"
    letter-spacing="2px"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </c-button> -->
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'solid',
      validator: (variant: string) =>
        ['solid', 'outline', 'ghost'].includes(variant),
    },
  },
  setup(props, ctx) {
    const variantStyles = {
      solid: {
        bg: '#f3e900',
        color: 'black',
        border: '2px solid #f3e900',
        ':hover': { bg: '#9e9803', borderColor: '#f3e900' },
        ':active': { bg: '#9e9803', color: 'black' },
        ':focus': {
          bg: '#9e9803',
          color: 'black',
          shadow: 'outline',
        },
      },
      outline: {
        background: 'transparent',
        border: '2px solid #f3e900',
        ':hover': { bg: '#f3e900', color: 'black' },
        ':active': { bg: '#f3e900', color: 'black' },
        ':focus': {
          bg: '#f3e900',
          color: 'black',
          shadow: 'outline',
        },
      },
      ghost: {
        bg: 'transparent',
        color: '#f3e900',
        border: '2px solid transparent',
        ':hover': { bg: '#f3e900', color: 'black' },
        ':active': { bg: '#f3e900', color: 'black' },
        ':focus': {
          bg: '#f3e900',
          color: 'black',
          shadow: 'outline',
        },
      },
    };

    return { variantStyles };
  },
});
</script>
