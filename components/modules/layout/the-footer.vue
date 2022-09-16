<template>
  <c-stack as="footer" spacing="1" p="20" align="center" letter-spacing="2px">
    <c-text>3935 N. Peoria Rd</c-text>
    <c-text>Springfield, IL 62702</c-text>
  </c-stack>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'AppFooter',
});
</script>
