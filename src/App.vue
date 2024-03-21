<template>
  <Widgets />
</template>

<script lang="ts" setup>
import Widgets from '@/pages/widgets/Widgets.vue';
</script>

<style lang="scss">
@import './assets/style/main.scss';

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: unset;
    height: unset;
  }
}
</style>
