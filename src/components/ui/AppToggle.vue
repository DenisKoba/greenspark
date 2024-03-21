<template>
  <label class="switch">
    <input
      type="checkbox"
      :checked="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.checked)"
    />
    <span class="slider round"></span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps<{ modelValue: boolean }>();
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@import '../../assets/style/main.scss';

.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #ccc;
  transition: 0.4s;
  box-sizing: border-box;
  box-shadow: inset 0 0 2px 0 rgb(0 0 0 / 28%);
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 0;
  bottom: 0;
  background-color: $green;
  transition: 0.4s;
  border-radius: 50%;
  opacity: 0.2;
}

.slider:after {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  left: -2px;
  bottom: -2px;
  background-color: #ffffff;
  transition: 0.4s;
  border-radius: 50%;
  border: 1px solid #f2ebdb;
}

input:checked + .slider {
  background-color: $green;
}

input:focus + .slider {
  box-shadow: 0 0 1px $green;
}

input:hover + .slider:before {
  transform: scale(1.6);
}

input:checked + .slider:before {
  transform: translateX(24px);
}

input:checked:hover + .slider:before {
  transform: translateX(24px) scale(1.6) !important;
}

input:checked + .slider:after {
  transform: translateX(24px);
  border: 1px solid $green;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
</style>
