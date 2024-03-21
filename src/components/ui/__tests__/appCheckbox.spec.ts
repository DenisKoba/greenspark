import { mount } from '@vue/test-utils';
import AppCheckbox from '../AppCheckbox.vue';

describe('MyCheckbox', () => {
  it('renders unchecked when modelValue is false', async () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        modelValue: false,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    // @ts-expect-error: checked is a boolean
    expect(checkbox.element.checked).toBe(false);
  });

  it('renders checked when modelValue is true', async () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        modelValue: true,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    // @ts-expect-error: checked is a boolean
    expect(checkbox.element.checked).toBe(true);
  });

  it('emits "update:modelValue" event with true when checkbox is clicked from false', async () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        modelValue: false,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    // @ts-expect-error: checked is a boolean
    await checkbox.setChecked();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper?.emitted('update:modelValue')?.[0]).toEqual([true]);
  });

  it('emits "update:modelValue" event with false when checkbox is clicked from true', async () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        modelValue: true,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    // @ts-expect-error: checked is a boolean
    await checkbox.setChecked(false);

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper?.emitted('update:modelValue')?.[0]).toEqual([false]);
  });
});
