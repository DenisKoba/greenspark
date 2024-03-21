<template>
  <div class="app-color-select">
    <div
      v-for="color in colors"
      :key="color"
      :class="[
        'app-color-select__item',
        color,
        { selected: color === modelValue },
      ]"
      @click="$emit('update:modelValue', color)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

defineProps<{ modelValue: string; colors: string[] }>();
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@import '../../assets/style/main.scss';

.app-color-select {
  display: flex;
  gap: 4px;

  &__item {
    width: 16px;
    height: 16px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      opacity: 0.8;
    }
  }
}

@mixin color-style($color) {
  background-color: $color;
  border: 2px solid $color;
}

.green {
  @include color-style($green);
}

.black {
  @include color-style($black);
}

.blue {
  @include color-style($blue);
}

.white {
  @include color-style($white);
}

.beige {
  @include color-style($beige);
}

.selected {
  border: 2px solid $selected;
}
</style>
