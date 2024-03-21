<template>
  <div :class="['widget-card', color]">
    <WidgetLogo class="widget-card__logo" />
    <div class="widget-card__info">
      <h3>This products {{ widget.action }}</h3>
      <p>
        {{ widget.amount }}{{ widget.type === 'carbon' ? 'kgs of' : '' }}
        {{ widget.type }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import { Widget } from '@/core/api/fetchWidgets';
import WidgetLogo from '@/components/widget/WidgetLogo.vue';

defineProps<{ widget: Widget; color: string }>();
</script>

<style lang="scss" scoped>
@import '../../assets/style/main.scss';

.widget-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  transition: 0.5s;

  &__info {
    color: white;

    h3 {
      font-size: 12px;
      margin: 0 0 4px 0;
      font-weight: 400;
    }

    p {
      font-size: 16px;
      font-weight: 900;
      margin: 0;
    }
  }

  &__logo {
    margin: 0 12px 0 0;
    fill: $white;
  }
}

.green {
  background: $green;
}

.black {
  background: $black;
}

.blue {
  background: $blue;
}

.white {
  background: $white;

  & > .widget-card__info {
    color: $green !important;
  }

  & > .widget-card__logo {
    fill: $green;
  }
}

.beige {
  background: $beige;
  color: $green !important;

  & > .widget-card__info {
    color: $green !important;
  }

  & > .widget-card__logo {
    fill: $green;
  }
}
</style>
