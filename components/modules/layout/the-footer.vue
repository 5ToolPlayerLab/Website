<template>
  <c-stack as="footer" spacing="1" p="20" align="center" letter-spacing="2px">
    <c-text>3330 Ginger Creek Parkway</c-text>
    <c-text>Suite C</c-text>
    <c-text>Springfield, IL 62704</c-text>
  </c-stack>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'AppFooter',
});
</script>
