<template>
  <label class="container">
    <input
      type="checkbox"
      :checked="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.checked)"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

defineProps<{ modelValue: boolean }>();
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@import '../../assets/style/main.scss';

/* The container */
.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  left: -18px;
  top: -9px;
  z-index: 0;

  &:after {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 0;
    bottom: -18px;
    background-color: $green;
    transition: 0.4s;
    border-radius: 50%;
    opacity: 0;
    z-index: -1;
  }

  &:hover::after {
    opacity: 0.2;
    transform: scale(2);
  }

  &:hover > .checkmark {
    border: 2px solid $green;
  }
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border-radius: 2px;
  border: 2px solid #000;
  box-sizing: border-box;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: $green;
  border: 2px solid $green;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 4px;
  top: 0;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.container:hover {
}
</style>
