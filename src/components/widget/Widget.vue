<template>
  <div class="widget">
    <WidgetCard :widget="widget" :color="selectedColor" />
    <div class="widget__settings">
      <div class="widget__settings_item">
        <span class="widget__settings_item-link"
          >Link to Public Profile
          <AppTooltip class="widget__settings_tooltip">
            This widget links directly to your public profile so that you can
            easily share your impact with your customers. Turn it off here if
            you do not want the badge to link to it.
            <template #action> View Public Profile </template>
          </AppTooltip>
        </span>
        <AppCheckbox v-model="isLinkedToPublicProfile" />
      </div>
      <div class="widget__settings_item">
        <span>Badge colour</span>
        <AppColorSelect v-model="selectedColor" :colors="colors" />
      </div>
      <div class="widget__settings_item">
        <span>Activate badge</span>
        <AppToggle v-model="isActive" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue';

import { useWidgets } from '@/composables/useWidgets';
import { Widget } from '@/core/api/fetchWidgets';

import WidgetCard from '@/components/widget/WidgetCard.vue';
import AppCheckbox from '@/components/ui/AppCheckbox.vue';
import AppToggle from '@/components/ui/AppToggle.vue';
import AppColorSelect from '@/components/ui/AppColorSelect.vue';
import AppTooltip from '@/components/ui/AppTooltip.vue';

const props = defineProps<{ widget: Widget }>();

const { toggleActive } = useWidgets();

const colors = ref<string[]>(['blue', 'green', 'beige', 'white', 'black']);
const selectedColor = ref(props.widget.selectedColor);
const isLinkedToPublicProfile = ref(props.widget.linked);

const isActive = computed({
  get: () => props.widget.active,
  set: (value: boolean) => {
    toggleActive({ value, id: props.widget.id });
  },
});
</script>

<style lang="scss" scoped>
@import '../../assets/style/main.scss';

.widget {
  max-width: 220px;
  width: 220px;

  @media screen and (max-width: 768px) {
    margin: 0 0 40px 0;
    max-width: unset;
    width: 100%;
  }

  &__settings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px 0 0 0;

    &_tooltip {
      position: absolute;
      right: 8px;
      top: 0;
    }

    &_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 5px 0;
      font-size: 14px;
      color: $green;
      position: relative;

      &-link {
        position: relative;
      }

      & span {
        padding: 0 20px 0 0;
      }
    }
  }
}
</style>
