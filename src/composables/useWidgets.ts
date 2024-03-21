import { ref } from 'vue';
import { fetchWidgets, Widget as WidgetType } from '@/core/api/fetchWidgets';

const widgets = ref<WidgetType[]>([]);
const isLoading = ref(true);

export const useWidgets = () => {
  const toggleActive = ({
    value,
    id,
  }: {
    value: boolean;
    id: number;
  }): void => {
    widgets.value.forEach((widget) => (widget.active = false));

    const widget = widgets.value.find((widget) => widget.id === id);

    if (widget) {
      widget.active = value;
    }
  };
  const loadWidgetsList = async (): Promise<void> => {
    isLoading.value = true;

    try {
      widgets.value = await fetchWidgets();
    } catch (e) {
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    widgets,
    toggleActive,
    loadWidgetsList,
  };
};
