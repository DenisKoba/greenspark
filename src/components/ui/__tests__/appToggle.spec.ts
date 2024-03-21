import { mount } from '@vue/test-utils';
import AppToggle from '../AppToggle.vue'; // Update the path as per your project structure

describe('Switch.vue', () => {
  it('renders unchecked checkbox when modelValue is false', () => {
    const wrapper = mount(AppToggle, {
      props: {
        modelValue: false,
      },
    });

    // @ts-expect-error: checked is a boolean
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(false);
  });

  it('renders checked checkbox when modelValue is true', () => {
    const wrapper = mount(AppToggle, {
      props: {
        modelValue: true,
      },
    });

    // @ts-expect-error: checked is a boolean
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(true);
  });

  it('emits "update:modelValue" event when checkbox is clicked', async () => {
    const wrapper = mount(AppToggle, {
      props: {
        modelValue: false,
      },
    });

    await wrapper.find('input[type="checkbox"]').trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
  });

  it('does not emit "update:modelValue" event when disabled', async () => {
    const wrapper = mount(AppToggle, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });

    await wrapper.find('input[type="checkbox"]').trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
});
