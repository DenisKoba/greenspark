<template>
  <div class="app-tooltip">
    <span class="app-tooltip__i">i</span>
    <div class="app-tooltip__wrapper">
      <div class="app-tooltip__top-border"></div>
      <div class="app-tooltip__descr">
        <slot></slot>
        <div class="app-tooltip__action">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '../../assets/style/main.scss';

.app-tooltip {
  border-radius: 4px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  &__descr {
    width: 100%;
    display: block;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    background-color: $semi-white;
    padding: 24px 16px;
    border-radius: 4px;
    z-index: 1;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #212121;
    box-sizing: border-box;
  }

  &__i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    border-radius: 50%;
    border: 1px solid $green;
    color: $green;
    width: 8px;
    height: 8px;
    cursor: pointer;
  }

  &__action {
    margin-top: 10px;
    color: $green;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
  }

  &:hover > .app-tooltip__wrapper {
    visibility: visible;
  }

  &__top-border {
    height: 10px;
    width: 100%;
    background-color: transparent;
  }

  &__wrapper {
    visibility: hidden;
    display: flex;
    flex-direction: column;
    width: 248px;
    position: absolute;
  }
}
</style>
