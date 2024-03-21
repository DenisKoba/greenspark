<template>
  <div class="widgets">
    <h1>Per product widgets</h1>
    <div class="widgets__wrapper">
      <Widget v-for="widget in widgets" :key="widget.id" :widget="widget" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWidgets } from '@/composables/useWidgets';

import Widget from '@/components/widget/Widget.vue';

const { widgets, loadData } = useWidgets();

loadData();
</script>

<style lang="scss" scoped>
@import '../../assets/style/main.scss';

.widgets {
  width: 100%;
  max-width: 800px;
  background-color: $semi-white;
  padding: 36px;
  border-radius: 4px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: unset;
  }

  h1 {
    font-size: 24px;
    padding: 0 0 20px 0;
    margin: 0 0 20px 0;
    border-bottom: 2px solid $selected;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 0 50px 0;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
