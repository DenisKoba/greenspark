import { mount } from '@vue/test-utils';
import ColorSelect from '../AppColorSelect.vue';

describe('ColorSelect', () => {
  it('renders colors correctly', async () => {
    const colors = ['green', 'black', 'blue', 'white', 'beige'];
    const wrapper = mount(ColorSelect, {
      props: {
        modelValue: 'green',
        colors: colors,
      },
    });

    const items = wrapper.findAll('.app-color-select__item');
    expect(items).toHaveLength(colors.length);

    items.forEach((item, index) => {
      expect(item.classes()).toContain(colors[index]);
    });
  });

  it('emits "update:modelValue" event with selected color when color is clicked', async () => {
    const colors = ['green', 'black', 'blue', 'white', 'beige'];
    const wrapper = mount(ColorSelect, {
      props: {
        modelValue: 'green',
        colors: colors,
      },
    });

    const blackItem = wrapper.find('.black');
    await blackItem.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['black']);
  });
});
