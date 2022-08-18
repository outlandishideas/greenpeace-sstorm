import { mount } from '@vue/test-utils'
import RegisterPage from '@/views/RegisterPage.vue'

describe('RegisterPage.vue', () => {
  it('renders register vue', () => {
    const wrapper = mount(RegisterPage)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
